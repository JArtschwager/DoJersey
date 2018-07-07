import React, {Component} from "react";
import {Route} from 'react-router-dom';
import './style/homestyle.css';
import mapofnj from './style/mapofNJ.gif';
import northJersey from './style/northJersey.gif';
import southJersey from './style/southJersey.gif';

import moment from "moment";

//  1) rename the values of state.
//    2)get to display on the page

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
      <div className="jumbotron jumbotron-fluid py-5 jumboStyle">
              <div className="row">
                      <div className="col-5">
                      <img src={mapofnj} className="rounded float-left newJerseyMap" />
                      </div>
                  <div className="col-6">
                    <h2> Find what there is to do in New Jersey</h2>
                      <h4>Follow the prompts for your recommended activities list</h4>
                            {/*<form> */}
                                <div className="form-group">       
                                <Route render={({ history}) => ( 
                                <button className="btn btn-block buttonColor northButton"
                                onClick={() => { history.push('/activities/north') }} >
                               { /*onClick={this.articleSearch}>*/}
                                  I'm interested in North Jersey
                                </button>)}
                                />
                                <Route render={({ history}) => ( 
                                <button type="submit" className="btn btn-block buttonColor southButton" onClick={() => { history.push('/activities/south') }} >
                                I'm interested in South Jersey
                                </button>)}
                                />

                                <Route render={({ history}) => ( 
                                  <button type="submit" className="btn btn-block buttonColor centralButton" onClick={() => { history.push('/activities/central') }} >
                                  I believe in Central Jersey  </button>)}
                                  />

                          </div>
                  </div>
              </div>    
          </div>    
   </div>
     
)
   
    
  }
}

export default Home;