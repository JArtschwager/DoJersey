import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";
import {Route} from 'react-router-dom';
import './style/homestyle.css';
import './style/resultsStyle.css';
import boardwalk from "./style/boardwalk.jpg";

//the saved page should have the commands similar to the login check?  figure that out.

class Saved extends Component {

  state = {
    todonjs: []
  }

  componentDidMount() {
    this.getSavedActivities();
  }

  getSavedActivities = () => {
    API.activitiesRetrieve()
      .then(res => this.setState({todonj: res.data}))
      .catch(err => console.log(err))
  }

  deletetodonj = id => {
    API.activitiesDelete(id)
      .then(() => this.getSavedActivities())
      .catch(err => console.log(err))
  }



  render() {
    return (
      <div>
        <div className="container">
        <div className="jumbotron jumbotron-fluid py-5 jumboStyle">
        </div>
          <div className="row firstRow mx-auto row align-items-center justify-content-center my-5">
          <h1>Saved todonj Below</h1>
          </div>

                      {/* todonj result container */}
                      <div className="col-12">
                        <h2>{this.state.todonjs.length
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
                              .todonjs
                              .map(todonj => (
                                <tr key={todonj._id}>
                                  <td><img className="resultImage" src={todonj.imageURL} />
                                  <span
                                  className="badge badgeColor py-2"
                                  onClick={() => this.deletetodonj(todonj._id)}>Delete todonj</span></td>
                                  <td><div><a href={todonj.url} className="resultTitle" target="_blank">{todonj.title}</a></div>
                                  <div className="phoneNumber">{todonj.phoneNumber
                                    ? "Phone: "+todonj.phoneNumber
                                    : ""}</div>
                                  <div className="description">{todonj.description
                                      ? todonj.description
                                      : ""}</div></td>
                                  <td className="location">{todonj.location}</td>
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