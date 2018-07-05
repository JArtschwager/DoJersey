import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";
import {Route} from 'react-router-dom';
import './style/homestyle.css';
import './style/resultsStyle.css';


// state may need to change.
class Results extends Component {

  state = {
    todonjs: []
  }

  componentDidMount() {
    this.getSavedActivities();
  }

  // getAllActivities = () => {
  //   API.todoNJSearch()
  //     .then(res => this.setState({todonjs: res.data}))
  //     .catch(err => console.log(err))
  // }
  
  getSavedActivities = () => {
    API.activitiesRetrieve()
      .then(res => this.setState({todonjs: res.data}))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div>
        <div className="container">
        <div className="jumbotron jumbotron-fluid py-5 jumboStyle">
        <div ClassName="resultsHeader">text test here.  Needs to be input based on which is selected from DB and buttons.</div>
        </div>
          <div className="row firstRow mx-auto row align-items-center justify-content-center my-5">
          <h1>Your Results below</h1>
          </div>  
                <table className="table table-hover">
                  <thead>
                      <tr>
                          <th scope="col">Name</th>
                          <th scope="col">location</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Image</th>
                          <th scope="col">Description</th>
                      </tr>
                  </thead>
                    
                        <h2>{this.state.todonjs.length
                          ? ""
                          : "No Saved activities to Display"}
                        </h2>
                      <tbody>


                        <div className="test">
                          {this
                            .state
                            .todonjs
                            .map(todonj => (
                              
                              <tr key={todonj._id} className="row">

                                <th scope="row">
                        
                                <a href={todonj.url} className="resultTitle" target="_blank">{todonj.title}</a>
                                <th key={todonj._id} scope="row">1</th>
                                <td><a href={todonj.url} className="resultTitle" target="_blank">{todonj.title}</a>
                                </td>
                                <td className="location">{todonj.location}</td>
                                <td className="phoneNumber">{todonj.phoneNumber}</td>
                                <td className="imageURL">{todonj.imageURL}</td>
                                </th>
                          
                              
                              </tr>
                            ))}
                            
                        </div>
                        </tbody>
                      </table>

                      {/* todonj result container */}
                    {/*  <div className="col-12">
                        <h2>{this.state.todonjs.length
                          ? ""
                          : "No Saved activities to Display"}
                        </h2>

                        <ul className="list-group list-group-flush">
                          {this
                            .state
                            .todonjs
                            .map(todonj => (
                              <li key={todonj._id} className="list-group-item d-flex justify-content-between align-items-center">
                                <a href={todonj.url} className="resultTitle" target="_blank">{todonj.title}</a>
                                <div className="location">{todonj.location}</div>
                                <div className="phoneNumber">{todonj.phoneNumber}</div>
                                <div className="imageURL">{todonj.imageURL}</div>

                              
                              </li>
                            ))}
                        </ul>
                          </div> */}
              </div>
          </div>
    )
  }
}

export default Results;


// <tr>
// <a href={todonj.url} className="resultTitle" target="_blank">{todonj.title}</a>

//   <th key={todonj._id} scope="row">1</th>
//   <td><a href={todonj.url} className="resultTitle" target="_blank">{todonj.title}</a>
//   </td>
//   <td className="location">{todonj.location}</td>
//   <td className="phoneNumber">{todonj.phoneNumber}</td>
//   <td className="imageURL">{todonj.imageURL}</td>
// </tr>
