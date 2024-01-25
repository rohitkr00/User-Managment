import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Nav = () => {

  const [apiData, setApidata] = useState(null);
   
  if (localStorage.getItem('token') === null)
  {
  
    console.log("local storage is empty");
  
  } else
  {
      const token = localStorage.getItem('token');
     
      axios.post("http://127.0.0.1:8000/Authapp/check_permission/",  {
        headers: { 'Authorization': token }
      })
        .then((response) => {
          const dataTopass = response.data;
          setApidata(dataTopass);
          console.log(dataTopass);
                 
          
        });
  }





 

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
      <Link to="/home" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
      <Link to="/signup" className="nav-link">SignUp</Link>
      </li>
      <li className="nav-item">
      <Link to="/login" className="nav-link">Login</Link>
      </li>
      <li className="nav-item">
      <Link to={{ pathname: '/profile', state: apiData }} className="nav-link">Profile</Link>
      </li>
    </ul>
   
  </div>
</nav>

<Outlet />


        </>

    );

}

export default Nav;