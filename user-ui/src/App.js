import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import AuthUser from './Auth2/AuthUser';
import Auth from './nav/auth';
import Guest from './nav/guest';
import Adminauth from "./nav/adminauth";

function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest />
  }
  else{
    const {user} = AuthUser();
    if (user.role == "user"){
    return <Auth />
  }
    else{
      return <Adminauth />
    }
  }
}

export default App;
