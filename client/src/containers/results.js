import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";
import { Route } from 'react-router-dom';
import './style/homestyle.css';
import './style/resultsStyle.css';
import boardwalk from "./style/boardwalk.jpg";


// state may need to change.
class Results extends Component {

  state = {
    todonjs: [],
    type: null,
    loc: null,
    isLoggedIn: true,
    username: ""
  }

  constructor(props) {
    super(props);

    console.log(props);
  }

  componentDidMount() {
    // this.getSavedActivities();
    this.loginCheck();
    console.log(this);
    console.log("this ^ ^ ^");
    if(this.props.props) {
      this.getActivitiesByLocType(this.props.props.match.params.loc,this.props.props.match.params.type);
    } else {
      this.getActivities();
    }
    

  }


  getSavedActivities = () => {
    API.activitiesRetrieve()
      .then(res => this.setState({ todonjs: res.data }))
      .catch(err => console.log(err));


  }

  getActivities = () => {
    console.log("BOOM");
    API.todoNJAll()
      .then(res => this.setState({ todonjs: res.data }))
      .catch(err => console.log(err));
  }

  getActivitiesByLocType = (loc,type) => {
    console.log("BOOM");
    console.log(type);
    API.activitiesByLocType(loc,type)
      .then(res => this.setState({ todonjs: res.data, type: type, loc: loc }))
      .catch(err => console.log(err));
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

  saveActivity = (id, username) => {

    console.log({id: id,
      username: username});
    API.activitiesSave({
      activity_id: id,
      username: username,
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="jumbotron jumbotron-fluid py-5 jumboStyle resultsJumbo">
          </div>
          <div className="firstRow mx-auto row align-items-center justify-content-center my-5">
            <h2>Your Results</h2>
          </div>
          <div className="mx-auto row align-items-center justify-content-center">
            <h3><strong>Filtered by Location: </strong> {this.state.type
              ? this.state.loc
              : "all"} <br></br><strong>Type: </strong>{this.state.type
                ? this.state.type
                : "all"}</h3>

            <h2>{this.state.todonjs.length
              ? ""
              : "No activities to Display"}</h2>
          </div>
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
                      <span className="badge badgeColor badgeResults py-3"
                        onClick={() => this.saveActivity(todonj._id, this.state.username)}>Save Activity</span></td>
                    <td><div><a href={todonj.url} className="resultTitle" target="_blank">{todonj.title}</a></div>
                      <div className="phoneNumber">{todonj.phoneNumber
                        ? "Phone: " + todonj.phoneNumber
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
    )
  }
}

export default Results;

