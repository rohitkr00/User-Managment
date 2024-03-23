import React from "react";
import { useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';







export default function Signup() {

  const navigate = useNavigate();

    const [user, setUser] = useState({
        name:"",email:"",role:"user",password:"",adress:"",gender:"",designation:"",department:"",ctc:"",education:"",phone:"",photo: null,otp:""
      })

   

      
    
    
      let name, value, type;
      const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        type = e.target.type;
    
        if (type === "file") {
          setUser({ ...user, photo: e.target.files[0] });
        } else {
          setUser({ ...user, [name]: value });
        }
      }

      // let otp2;
      // const handleOtp = (e) => {
      //   otp2 = e.target.value;
      //   setOtp(otp2);
      // };

    

      const baseURL = "http://127.0.0.1:8000/Authapp/register_view/";
      const handleSubmit = (e) => {
          e.preventDefault();
          // console.log(user);
          // const formData = new FormData();
          // for (let key in user) {
          // formData.append(key, user[key]);
          //   }
          
          axios.post(baseURL, user)
          .then((response) => {
            
            console.log(response);
            if (response.data != null){
              toast.success("User has been registered");
              navigate("/login");
            }
          })
          .catch((error) => {
            toast.error("Wrong credentials Please Re-enter the details...!!")
            console.error(error);
          });       
          
      }


      const baseURL0 = "http://127.0.0.1:8000/Authapp/fetch_email/";
      const Sendotp = () =>{
        if (user.email !== ""){
          axios.post(baseURL0, {email: user.email})
          .then((response) => {
            toast.success('Otp has been sent to your email adresss!');
            console.log(response);
            
            
          })
          .catch((error) => {
            alert("Please Enter valid email")
            console.error(error);
          });
        }
        else{
          toast.warning("Plz Enter valid mail id!");
        }
      }





    return (
        
 <>


  
  <section className="h-100 ">
    <div className="container py-0 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col ">
          <div className="card card-registration my-4  shadow p-1 mb-2 bg-white rounded">
            <div className="row g-0 bg-light">
              <div className="col-xl-6 d-none d-xl-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample"
                  className="img-fluid"
                  style={{
                    borderTopLeftRadius: ".25rem",
                    borderBottomLeftRadius: ".25rem"
                  }}
                />
              </div>
              <div className="col-xl-6">
                <div className="card-body p-md-4 text-black">
                  <h3 className="mb-3">
                    SignUp
                  </h3>





                   
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                         
                          className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                          name="name"
                          value={user.name}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="Email"
                          
                          className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                          name="email"
                          value={user.email}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1n">
                          Email
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="password"
                         
                          className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                          name="password"
                          value={user.password}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m1">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="number"
                          
                          className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                          name="ctc"
                          value={user.ctc}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1n1">
                          CTC
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <input
                      type="text"
                    
                      className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                      name="adress"
                      value={user.adress}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example8">
                      Address
                    </label>
                  </div>
                  <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                    <h6 className="mb-0 me-4">Gender: </h6>
                    <div className="form-check form-check-inline mb-0 me-4">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                       
                        value="female"
                        onChange={handleInputs}
                        checked={user.gender==="female"}
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
                        checked={user.gender==="male"}
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
                        checked={user.gender==="other"}
                      />
                      <label className="form-check-label" htmlFor="otherGender">
                        Other
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="text"
                         
                          className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                          name="designation"
                          value={user.designation}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Designation
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-outline">
                        <input
                          type="Email"
                         
                          className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                          name="department"
                          value={user.department}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1n">
                          Department
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-outline mb-2">
                    <input
                      type="text"
                     
                      className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                      name="education"
                      value={user.education}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example90">
                      Education
                    </label>
                  </div>
                  <div className="form-outline mb-2">
                    <input
                      type="tel"
                      
                      className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example99">
                      Phone Number
                    </label>
                  </div>
                  <div className="form-outline mb-2">
                    <input
                      type="file"
                      name="photo"
                      onChange={handleInputs}
                      className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                    />
                    <label className="form-label" htmlFor="form3Example97">
                      Profile Photo
                    </label>
                  </div>
                  <div className="form-outline mb-2">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      className="form-control form-control-lg card shadow p-1 mb-2 bg-white rounded"
                      value={user.otp}
                      name="otp" 
                      onChange={handleInputs}                     
                    />
                    <button className="btn btn-warning mt-2 " onClick={Sendotp}>Generate Otp</button>
                    
                    
                  </div>

             



                  <div className="d-flex justify-content-end pt-3">
                    
                    <button type="button" className="btn btn-light btn-lg" onClick={()=>navigate("/login")} >
                      Login
                    </button>
                    <button
                      type="button"
                      className="btn btn-success btn-lg ms-2" onClick={handleSubmit}>
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