import React, { useState } from "react";
import './register.css';
import axios from "axios";

const Register = () =>  {

  const [user, setUser] = useState({
    name:"",email:"",password:"",adress:"",gender:"",designation:"",department:"",ctc:"",education:"",phone:"",
  })


  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  }

  


  const baseURL = "http://127.0.0.1:8000/Authapp/login_view/";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(baseURL, user).then((response) => {
        console.log(response)
      });
      
  }






  const [action,setAction] = useState("SignUp")

    return(


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
                    {action}
                  </h3>





                    {action==="Login"?<>
                    
                    <div className="row">
  <div className="col-md-6 mb-4">
    <div className="form-outline">
      <input
        type="email"
       
        className="form-control form-control-lg"
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
      />
      <label className="form-label" htmlFor="form3Example1n">
        Password
      </label>
    </div>
  </div>
</div>



                    
                    </>:




<>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                         
                          className="form-control form-control-lg"
                          name="name"
                          value={user.name}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="Email"
                          
                          className="form-control form-control-lg"
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
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="password"
                         
                          className="form-control form-control-lg"
                          name="password"
                          value={user.password}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m1">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="number"
                          
                          className="form-control form-control-lg"
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
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                    
                      className="form-control form-control-lg"
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
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                         
                          className="form-control form-control-lg"
                          name="designation"
                          value={user.designation}
                          onChange={handleInputs}
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Designation
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="Email"
                         
                          className="form-control form-control-lg"
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
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                     
                      className="form-control form-control-lg"
                      name="education"
                      value={user.education}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example90">
                      Education
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="tel"
                      
                      className="form-control form-control-lg"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputs}
                    />
                    <label className="form-label" htmlFor="form3Example99">
                      Phone Number
                    </label>
                  </div>
                  {/* <div className="form-outline mb-4">
                    <input
                      type="Image"
                     
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form3Example97">
                      Profile Photo
                    </label>
                  </div> */}

             </>   }



                  <div className="d-flex justify-content-end pt-3">
                    
                    <button type="button" className={action==="SignUp"?"btn btn-light btn-lg":"btn btn-warning btn-lg ms-2"} onClick={()=>{setAction("Login")}}>
                      Login
                    </button>
                    <button
                      type="button"
                      className={action==="Login"?"btn btn-light btn-lg":"btn btn-warning btn-lg ms-2"} onClick={handleSubmit}>
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
</>


)

}

export default Register;