import React, {Component} from "react";
import API from "../utils/API";
import './style.css';
import {Route} from 'react-router-dom';



//1) change state
//2) change the content below for site.



class Activities extends Component {

  state = {
    activities: [],
    q: "",
    begin_date: "",
    end_date: ""
  }

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  //the line below is stolen code to figure out how to click the final button to get to the next page.
//   handleOnChange: function(e) {
//     var options = e.target.options;
//     var value = [];
//     for (var i = 0, l = options.length; i < l; i++) {
//       if (options[i].selected) {
//         value.push(options[i].value);
//       }
//     }
//     this.props.someCallback(value);
//   }

  render() {
    return (
            <div className="container">
            <div className="jumbotron jumbotron-fluid py-5 jumboStyle">
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
                                            <button className="btn btn-block buttonColor"
                                            onClick={() => { 
                                                console.log(this.props)
                                                history.push('/activities/' + this.params.loc + '/active') }} >
                                            Amusement parks
                                        </button>)}/> 
                                        <Route render={({ history}) => (     
                                              <button type="submit" className="btn btn-block buttonColor" onClick={() => { 
                                                console.log(this.props)
                                                history.push('/activities/' + this.params.loc + '/active') }} >
                                            Classes & Events 
                                        </button>)}/>
                                        <Route render={({ history}) => (     
                                            <button type="submit" className="btn btn-block buttonColor" onClick={() => { 
                                                console.log(this.props)
                                                history.push('/activities/' + this.params.loc + '/active') }} >
                                            Hiking & Nature </button>)}/>
                                    </div>
                                </div>
                      </div>       
                  </div> 
                  </div>
        
        )
    }
}

export default Activities;
