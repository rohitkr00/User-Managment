import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import AuthUser from './Auth2/AuthUser';
import Auth from './nav/auth';
import Guest from './nav/guest';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Adminauth from "./nav/adminauth";

function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return (
      <>
    <Guest />
    <ToastContainer />
    </>
    );
  }
  else{
    const {user} = AuthUser();
    if (user.role == "user"){
      return (
        <>
      <Auth />
      <ToastContainer />
      </>
      );
  }
    else{
      return (
        <>
      <Adminauth />
      <ToastContainer />
      </>
      );
    }
  }
}

export default App;
