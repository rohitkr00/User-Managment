import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './App.css';
import AuthUser from './Auth2/AuthUser';
import Auth from './nav/auth';
import Guest from './nav/guest';

function App() {
  const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest />
  }
  else{
  return <Auth />
  }
}

export default App;
