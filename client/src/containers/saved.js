import React, { Component } from "react";
import API from "../utils/API";
import {Route} from 'react-router-dom';
import './style/homestyle.css';
import './style/resultsStyle.css';
import boardwalk from "./style/boardwalk.jpg";
import {Redirect} from "react-router-dom";
import barn from "./style/barn.jpg";


//the saved page should have the commands similar to the login check?  figure that out.

class Saved extends Component {

  state = {
    savedList: [],
    isLoggedIn: true,
    username: ""
  }

  componentDidMount() {
    this.getSavedActivities();
    this.loginCheck();
  }


  loginCheck = () => {
    API
      .loginCheck()
      .then(res => this.setState({
        isLoggedIn: res.data.isLoggedIn, username: res.data.username
      }))
      .catch(err => {
        console.log(err);
        this.setState({isLoggedIn: false})
      })

  }

  getSavedActivities = () => {
    API.savedRetrieved()
      .then(res => this.setState({savedList: res.data}))
      .catch(err => console.log(err))
  }

  deleteSaved = id => {
    API.savedDelete(id)
      .then(() => this.getSavedActivities())
      .catch(err => console.log(err))
  }



  render() {
    if (!this.state.isLoggedIn) {
      return <Redirect to="/login"/>
    }
    return (
      <div>
        <div className="container">
        <div className="jumbotron jumbotron-fluid py-5 jumboStyle savedJumbo">
        </div>
          <div className="row firstRow mx-auto row align-items-center justify-content-center my-5">
          <h1>Saved Activities Below</h1>
          </div>

                      <div className="col-12">
                        <h2>{this.state.savedList.length
                          ? ""
                          : "No Saved favorites to Display"}
                        </h2>
                        <table className="table table-hover">
                        <thead>
                            <tr>
                              <th scope="col">Image</th>
                              <th scope="col">Activity</th>
                              <th scope="col">location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this
                              .state
                              .savedList
                              .map(saved => (
                                <tr key={saved._id}>
                                  <td><img className="resultImage" src={saved.activity_id.imageURL} />
                                  <span
                                  className="badge badgeColor py-2"
                                  onClick={() => this.deleteSaved(saved._id)}>Delete</span></td>
                                  <td>
                                    <div>
                                          <a href={saved.activity_id.url} className="resultTitle" target="_blank">
                                          {saved.activity_id.title}
                                          </a>
                                    </div>
                                  <div className="phoneNumber">{saved.activity_id.phoneNumber
                                    ? "Phone: "+saved.activity_id.phoneNumber
                                    : ""}</div>
                                  <div className="description">{saved.activity_id.description
                                      ? saved.activity_id.description
                                      : ""}</div></td>
                                  <td className="location">{saved.activity_id.location}</td>
                              
                                </tr>
                              ))}
                        </tbody>
                      </table>  
                      </div>
              </div>
          </div>
    )
  }
}

export default Saved;