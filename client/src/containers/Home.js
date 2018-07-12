import React, {Component} from "react";
import {Route} from 'react-router-dom';
import './style/homestyle.css';
import mapofnj from './style/mapofNJ.gif';
import northJersey from './style/northJersey.gif';
import southJersey from './style/southJersey.gif';

import moment from "moment";


class Home extends Component {

  state = {
    activities: [],
    title: "",
    url: "",
   img: "",
  }

  handleOnChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row my-5">
                <div className="col-4">
                <img src={mapofnj} className="img-fluid rounded float-left newJerseyMap" />
                </div>
            <div className="col-8">
              <h1 className="text-center">What to do in New Jersey</h1>
                      {/*<form> */}
                          <div className="form-group">       
                          <Route render={({ history}) => ( 
                          <button className="btn btn-block buttonColor northButton"
                          onClick={() => { history.push('/activities/North Jersey') }} >
                          { /*onClick={this.articleSearch}>*/}
                            I'm Interested in North Jersey
                          </button>)}
                          />
                          <Route render={({ history}) => ( 
                            <button type="submit" className="btn btn-block buttonColor centralButton" onClick={() => { history.push('/activities/Central Jersey') }} >
                            I Believe in Central Jersey  </button>)}
                            />
                          <Route render={({ history}) => ( 
                            <button type="submit" className="btn btn-block buttonColor southButton" onClick={() => {
                                history.push('/activities/South Jersey') }} >
                            I'm Interested in South Jersey
                            </button>)}
                            />
                            <Route render={({ history}) => ( 
                              <button type="submit" className="btn btn-block buttonColor southButton" onClick={() => {
                                  history.push('/results') }} >
                              All Jersey, Jersey Strong
                              </button>)}
                              />

                    </div>
            </div>
        </div>    
   </div>
     
)
   
    
  }
}

export default Home;