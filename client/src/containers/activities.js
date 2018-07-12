import React, {Component} from "react";
import API from "../utils/API";
import './style.css';
import {Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';




class Activities extends Component {

  state = {
    activities: [],
  }


  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  constructor(props) {
      super(props);
        this.state = {activitiy: {name: ''} };
  }


  render() {
      
    return (
            <div className="container">
            <div className="jumbotron jumbotron-fluid py-5 jumboStyle activityImage">
            <div className="row">
                        <div className="col-12">
                            <div className="titlepage">
                                <h1> What interests you?</h1>
                            </div>
                        </div>
                    </div>
    <div className="row">
            <div className="col-12">
                        <div className="form-group">



                        <Route render={({ history}) => (     
                            <button type="submit" className="btn btn-block buttonColor" onClick={() => { 
                                console.log(this.props)
                                history.push('/results/'+this.props.props.match.params.loc+'/amusement') }} >
                            Amusement Parks
                        </button>)}/>

                        <Route render={({ history}) => (     
                            <button type="submit" className="btn btn-block buttonColor" onClick={() => { 
                                console.log(this.props)
                                history.push('/results/'+this.props.props.match.params.loc+'/classes') }} >
                            Classes & Indoor Activities 
                        </button>)}/>

                        <Route render={({ history}) => (     
                            <button type="submit" className="btn btn-block buttonColor" onClick={() => { 
                                console.log(this.props)
                                history.push('/results/'+this.props.props.match.params.loc+'/outdoor') }} >
                            Outdoor Activities </button>)}/>
                    </div>
                </div>
             </div>       
         </div> 
        </div>
        
        )
    }
}

export default Activities;
