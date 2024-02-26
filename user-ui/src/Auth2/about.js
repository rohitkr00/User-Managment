import React from "react";
import './style.css';
import myImage from "./img/about.jpg";



export default function About() {
   
  
   
    return (

        <>
          <section id="about" className="about">
  <div className="container">
    <div className="row">
      <div className="col-lg-6" data-aos="zoom-in">
        <img src={myImage} className="img-fluid" alt="" />
      </div>
      <div
        className="col-lg-6 d-flex flex-column justify-contents-center"
        data-aos="fade-left"
      >
        <div className="content pt-4 pt-lg-0">
          <h3>Learn more about us</h3>
          <p className="fst-italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <ul>
            <li>
              <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </li>
            <li>
              <i className="bi bi-check-circle" /> Duis aute irure dolor in
              reprehenderit in voluptate velit.
            </li>
            <li>
              <i className="bi bi-check-circle" /> Ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate trideta storacalaperd
            </li>
          </ul>
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate tera noden carma palorp
            mades tera.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


            
        </>
    );
}