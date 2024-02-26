import { Routes, Route, Link } from 'react-router-dom';
import Update from '../Auth2/update';
import Home from '../Auth2/Home';
import React from 'react';
import Profile from '../Auth/profile';
import AuthUser from '../Auth2/AuthUser';
import ManageTask from '../Auth2/managetask';
import AddTask from '../Auth2/addtask';
import About from '../Auth2/about';

function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
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
      <Link className="nav-link" to="/profile">
                                Profile
            </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/mtask">
                                ManageTask
            </Link>
      </li>
      <li className="nav-item">
            <button role="button" className="btn nav-link" onClick={logoutUser}>Logout</button>
      </li>
      
    </ul>
  </div>
  </div>
</nav>
            
            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/mtask" element={<ManageTask />} />
                    <Route path="/addtask" element={<AddTask />} />
                    <Route path="/about" element={<About />} />
                   
                </Routes>
            </div>
        </>
    );
}

export default Auth;
