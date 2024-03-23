import React from "react";
import myImage from "../Auth2/img/a1.avif"

import AuthUser from "../Auth2/AuthUser";
import { Outlet, useNavigate } from "react-router-dom";

const Profile = () => {
const {user} = AuthUser();
const navigate = useNavigate();
console.log(user)


return(

<>
    <section style={{ backgroundColor: "#eee" }}>
  <div className="container">
    <div className="row">
      <div className="col">
       
      </div>
    </div>
    <div className="row ">
      <div className="col-lg-4">
        <div className="card mb-4 shadow">
          <div className="card-body text-center">
            <img
              // src="C:\Users\DELL\Desktop\Mymiracle\usermanagment\media\images\IMG_20220620_003711.jpg"
              src={myImage}
              alt="Sample"
              className="rounded-circle img-fluid"
              style={{ width: 150 }}
            />
            <h5 className="my-3">{user.name}</h5>
            <p className="text-muted mb-1">{user.designation}</p>
            <p className="text-muted mb-4">{user.adress}</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary" onClick={()=>navigate('/update')}>
                update profile
              </button>
              <button type="button" className="btn btn-outline-primary ms-1">
                Message
              </button>
            </div>
          </div>
        </div>
        
      </div>
      <div className="col-lg-8 ">
        <div className="card mb-4 shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.name}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.phone}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">gender</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.gender}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Education</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.education}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Department</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.department}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">CTC</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.ctc}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{user.adress}</p>
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

)

}


export default Profile;