import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from './nav';
import Profile from './Auth/profile';
import Home from './Auth2/Home';
import Login from './Auth2/Login';
import Signup from './Auth2/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />} >
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
