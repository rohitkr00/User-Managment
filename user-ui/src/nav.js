import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Link } from "react-router-dom";

export default function Nav() {

    return (

        <>
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    Navbar 
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarText"
    aria-controls="navbarText"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" className="nav-link">SignUp</Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link">Login</Link>
      
      </li>
    </ul>
    {/* <span className="navbar-text">Navbar</span> */}
  </div>
</nav>

<Outlet />


        </>

    );

}