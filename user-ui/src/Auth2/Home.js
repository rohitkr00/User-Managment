import React from "react";
// import './style.css';
import myImage from "./img/hero-img.png"
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";




export default function Home() {
   
  const { state } = useLocation();
  const num = state && state.num;
  console.log(num);
  if (num !== null){
    toast.success("Login Successfull!!");
  }
   
    return (

        <>
          <section id="hero">
  <div className="container">
    <div className="row">
      <div
        className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
        data-aos="fade-up"
      >
        <div>
          <h1>We designed a digital products that help grow businesses</h1>
          <h2>
            This is User-managment system to manage the user of any organization.
          </h2>
          
          <Link className="btn-get-started scrollto nav-link" to="/about">
                                Get Started
                            </Link>
          
        </div>
      </div>
      <div
        className="col-lg-6 order-1 order-lg-2 hero-img"
        data-aos="fade-left"
      >
        <img src={myImage} className="img-fluid" alt="" />
       
      </div>
    </div>
  </div>
</section>

            
        </>
    );
}