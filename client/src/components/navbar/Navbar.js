import React from "react";
import { NavLink } from "react-router-dom";

const navStyle = {
    backgroundColor: 'rgba(247, 243, 243, 0.845)',
    borderBottom: '1px solid gray',
}

console.log(this);

var loginButtons;
if (1) {
  loginButtons = <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/">Home </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/saved">Saved</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
    <li className="nav-item">
         <NavLink className="nav-link" to="/logout">Logout</NavLink>
    </li>
  </ul>
</div>;
} else {
  loginButtons = <div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/">Home </NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
    </li>
    <li className="nav-item">
      <NavLink className="nav-link" to="/login">Login</NavLink>
    </li>
  </ul>
</div>;
}


// below the saved link doesn't go anywhere yet.

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light" style={navStyle}>
    <div class="container">
        <NavLink className="navbar-brand" to="/">To Do New Jersey</NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          {loginButtons}
        </div> 
    </div>
  </nav>
)

export default Navbar;