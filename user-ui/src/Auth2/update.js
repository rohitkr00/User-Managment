import React from "react";
import { useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";
import myImage from "./img/a1.avif"






export default function Update() {

  const navigate = useNavigate();

    const [user_d, setUser] = useState("")
      
    const {user, token, setToken} = AuthUser();
    
      let name, value;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        if (value !== ""){
        setUser({...user_d, [name]:value});
        }
      }

    

      const baseURL = "http://127.0.0.1:8000/Authapp/update_view/";
      const handleSubmit = (e) => {
          e.preventDefault();
          console.log(user_d)
          const uid = user.id
          axios.patch(baseURL, user_d,{
            headers: { 
                'X-User-ID': uid
                 }
          })
          .then((response) => {
            console.log(response);
            setToken(response.data, token);
            navigate("/profile");
          });
        
        
          
      }





    return (
        
 <>


  <section className="h-100 bg-light">
    <div className="container  h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col ">
          <div className="card card-registration shadow ">
            <div className="row g-0">
              <div className="col-xl-6 d-none d-xl-block">
                <img
                  src={myImage}
                  alt="Sample"
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: ".25rem",
                    borderBottomLeftRadius: ".25rem"
                  }}
                />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-5 text-black">
                  <h3 className="mb-3">
                    Update Profile
                  </h3>





                   
                  <div className="row">
                    <div className="col-md-6 mb-1">
                      <div className="form-outline">
                        <input
                          type="text"
                         
                          className="form-control form-control-lg"
                          name="name"
                          value={user_d.name}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-1">
                      <div className="form-outline">
                        <input
                          type="Email"
                          
                          className="form-control form-control-lg"
                          name="email"
                          value={user.email}
                          readOnly
                        />
                        <label className="form-label" htmlFor="form3Example1n">
                          Email
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-1">
                      <div className="form-outline">
                        <input
                          type="password"
                         
                          className="form-control form-control-lg"
                          name="password"
                          value={user_d.password}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m1">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-1">
                      <div className="form-outline">
                        <input
                          type="number"
                          
                          className="form-control form-control-lg"
                          name="ctc"
                          value={user_d.ctc}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1n1">
                          CTC
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-1">
                    <input
                      type="text"
                    
                      className="form-control form-control-lg"
                      name="adress"
                      value={user_d.adress}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example8">
                      Address
                    </label>
                  </div>
                  <div className="d-md-flex justify-content-start align-items-center mb-1 py-2">
                    <h6 className="mb-0 me-4">Gender: </h6>
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                       
                        value="female"
                        onChange={handleInputs}
                        checked={user_d.gender==="female"}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="femaleGender"
                      >
                        Female
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                       
                        value="male"
                        onChange={handleInputs}
                        checked={user_d.gender==="male"}
                      />
                      <label className="form-check-label" htmlFor="maleGender">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline mb-0">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                       
                        value="other"
                        onChange={handleInputs}
                        checked={user_d.gender==="other"}
                      />
                      <label className="form-check-label" htmlFor="otherGender">
                        Other
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-1">
                      <div className="form-outline">
                        <input
                          type="text"
                         
                          className="form-control form-control-lg"
                          name="designation"
                          value={user_d.designation}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Designation
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-1">
                      <div className="form-outline">
                        <input
                          type="Email"
                         
                          className="form-control form-control-lg"
                          name="department"
                          value={user_d.department}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1n">
                          Department
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-1">
                    <input
                      type="text"
                     
                      className="form-control form-control-lg"
                      name="education"
                      value={user_d.education}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example90">
                      Education
                    </label>
                  </div>
                  <div className="form-outline mb-1">
                    <input
                      type="tel"
                      
                      className="form-control form-control-lg"
                      name="phone"
                      value={user_d.phone}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example99">
                      Phone Number
                    </label>
                  </div>
                  {/* <div className="form-outline mb-1">
                    <input
                      type="Image"
                     
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example97">
                      Profile Photo
                    </label>
                  </div> */}

             



                  <div className="d-flex justify-content-end pt-3">
                    
                   
                    <button
                      type="button"
                      className="btn btn-warning btn-lg ms-2" onClick={handleSubmit}>
                      Update Profile
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