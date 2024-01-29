import { Routes, Route, Link } from 'react-router-dom';
import Update from '../Auth2/update';
import Home from '../Auth2/Home';
import React from 'react';
import Profile from '../Auth/profile';
import AuthUser from '../Auth2/AuthUser';

function Auth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                    </li>

                </ul>

            </nav>
            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/update" element={<Update />} />
                   
                </Routes>
            </div>
        </>
    );
}

export default Auth;
