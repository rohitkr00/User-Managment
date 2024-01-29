import React from "react";
import { useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";




export default function Login() {
  // State to manage user login information
   const {setToken} = AuthUser();
   const [user_login, setUserLogin] = useState({
    email2: "",
    password2: ""
  });

  // Function to handle input changes in the login form
  const handleInputLogin = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...user_login, [name]: value });
  };

  // Base URL for the login API endpoint
  const baseURL2 = "http://127.0.0.1:8000/Authapp/login_view/";

  // Function to handle login form submission
  const handleSubmitLogin = (e) => 
  {
    e.preventDefault();

    // Making a POST request to the login API endpoint
    axios.post(baseURL2, user_login)
      .then((response) => {
        // If successful, set the JWT token in local storage
        
        setToken(response.data.u_data, response.data.jwt);
       
      })
      .catch((error) => {
        alert("Wrong credentials Please Re-enter the details...!!")
        console.error(error);
      });
  };

  
  const checkUserPermissionsAndNavigate = () => 
  {
      
    const token = localStorage.getItem('token');
   
    axios.post("http://127.0.0.1:8000/Authapp/check_permission/",  {
      headers: { 'Authorization': token }
    })
      .then((response) => {
        
        // navigate("/profile", {state: { userdd: response.data}})
      })
     
  };

 
  const navigate = useNavigate();

















    return (

        <>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <section className="h-100 bg-dark">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col">
                <div className="card card-registration my-4">
                  <div className="row g-0">
                    <div className="col-xl-6 d-none d-xl-block">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                        alt="Sample photo"
                        className="img-fluid"
                        style={{
                          borderTopLeftRadius: ".25rem",
                          borderBottomLeftRadius: ".25rem"
                        }}
                      />
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body p-md-5 text-black">
                        <h3 className="mb-5">
                         Login
                        </h3>
      
      
      
      
    
                          
                          <div className="row">
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="email"
             
              className="form-control form-control-lg"
              name="email2"
              value={user_login.email2}
              onChange={handleInputLogin}
            />
            <label className="form-label" htmlFor="form3Example1m">
              Email
            </label>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="form-outline">
            <input
              type="password"
              
              className="form-control form-control-lg"
              name="password2"
              value={user_login.password2}
              onChange={handleInputLogin}
            />
            <label className="form-label" htmlFor="form3Example1n">
              Password
            </label>
          </div>
        </div>
      </div>
      
      
      
                          
                          
      
      
      
      
      
      
      
      
                        <div className="d-flex justify-content-end pt-3">
                          
                          <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handleSubmitLogin}>
                            Login
                          </button>
                          <button
                            type="button"
                            className="btn btn-light btn-lg">
                            SignUp
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Outlet />
      </>
        




    );
}