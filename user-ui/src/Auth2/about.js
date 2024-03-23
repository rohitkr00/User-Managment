import React from "react";
// import './style.css';
import myImage from "./img/about.jpg";



export default function About() {
   
  
   
    return (

        <>
          <section id="about" className="about">
  <div className="container shadow">
    <div className="row">
      <div className="col-lg-6" data-aos="zoom-in">
        <img src={myImage} className="img-fluid" alt="" />
      </div>
      <div
        className="col-lg-6 d-flex flex-column justify-contents-center"
        data-aos="fade-left"
      >
        <div className="content pt-4 pt-lg-0">
          <h3>Explore Our Project: User Management</h3>
          <p className="fst-italic">
          Welcome to our innovative project that seamlessly integrates user management with a powerful to-do list system. Here's what makes our solution stand out:
          </p>
          <ul>
           
            <li>
              <i className="bi bi-check-circle" /> User Management Made Simple
Our project offers robust user management capabilities, providing you with the tools you need to efficiently manage user accounts within your system. With features such as user registration, login, and profile management, you can easily onboard and authenticate users, ensuring secure access to your platform.
            </li>
            <li>
              <i className="bi bi-check-circle" /> Streamlined To-Do List Functionality
Say goodbye to scattered to-do lists and hello to organized productivity. 
            </li>
          </ul>
          <p>
          Our project includes a comprehensive to-do list feature that empowers users to create, manage, and prioritize tasks with ease. Whether you're working on personal projects or collaborating with a team, our intuitive interface makes it simple to stay on top of your tasks.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


            
        </>
    );
}