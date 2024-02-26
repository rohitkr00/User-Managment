import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Auth2/Home';
import Login from '../Auth2/Login';
import Signup from '../Auth2/Signup';
import About from '../Auth2/about';
import React from 'react';
import '../Auth2/style.css';


function Guest() {
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <div className="container-fluid justify-content-end">
  <a className="navbar-brand" href="/">
    Navbar
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse " id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to="/">
           Home
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">
                                About
                            </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/login">
                                Login
            </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/signup">
                                SignUp
            </Link>
      </li>
      
    </ul>
  </div>
  </div>
</nav>


            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default Guest;
