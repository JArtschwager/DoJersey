import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./containers/Home";
import Activities from "./containers/activities";
import Results from "./containers/results"
import Footer from "./components/footer/Footer";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Saved from "./containers/saved";
import Logout from "./containers/logout";

// i'm going to try to remove the Saved from line 16 and put it with middle instead.  otherwise i can move it back and put this elsewhere.
const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/activities/:loc" render={(props) => ( <Activities props={props}/>)}/>
        <Route path="/results/:loc/:type" render={(props) => ( <Results props={props}/>)}/>
        <Route exact path="/results" component={Results}/>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/logout" component={Logout}/>

        <Route render={() => (<h1 className="text-center">Page Not Found!</h1>)}/>
      </Switch>
      <Footer/>
    </div>
  </Router>
)


export default App;

