import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import './style/signup.css';
import './style/login.css';

class Login extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: ""
  }

  
  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }


  render() {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      return <Redirect to="/"/>
    }

    return (
      <div className="container my-5">
        <div className="row justify-content-center logoutStyle loginupdiv">
        <h1> You are not logged in.</h1>
        </div>
      </div>  
    )
  }
}

export default Login;