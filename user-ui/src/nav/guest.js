import { Routes, Route, Link } from 'react-router-dom';
import Home from '../Auth2/Home';
import Login from '../Auth2/Login';
import Signup from '../Auth2/Signup';
import About from '../Auth2/about';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Topnav.css'
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// ===============================================



// import { Container, Navbar, Nav } from 'react-bootstrap';







function Guest() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("toogle is working");
  };

  // Function to close the mobile navigation menu
  const closeNav = () => {
    setIsNavOpen(false);
  };



    return (
        <>
        <ToastContainer />
           {/* <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-fixed">
           <div className="container-fluid justify-content-end">
  <a className="navbar-brand" href="/">
    Welcome Guest 
  </a>
  <button
    className="navbar-toggler"
    type="button"
    onClick={toggleNav}
    // data-toggle="collapse"
    // data-target="#navbarNavDropdown"
    // aria-controls="navbarNavDropdown"
    aria-expanded={isNavOpen}
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`} id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link className="nav-link" to="/">
           Home
        </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/about">
                                About
                            </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/login">
                                Login
            </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/signup">
                                SignUp
            </Link>
      </li>
      
    </ul>
  </div>
  </div>
</nav> */}

<Navbar  expand="lg" className='shadow p-1 mb-2 '>
      <Container >
        <Navbar.Brand href="/" ><h3>User-Managment</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='list_grp'>
            <Nav.Link href="/" className='list_item'><h6>Home</h6></Nav.Link>
            <Nav.Link href="/about" className='list_item'><h6>About</h6></Nav.Link>
            <Nav.Link href="/login" className='list_item'><h6>Login</h6></Nav.Link>
            <Nav.Link href="/signup" className='list_item'><h6>SignUp</h6></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    );
}

export default Guest;



// import { NavLink } from "react-router-dom";
// import React ,{ useState }from "react";
// import "./nav.css"

// const Navbarbb = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   // Function to close the mobile navigation menu
//   const closeNav = () => {
//     setIsNavOpen(false);
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-fixed">
//         <div className="container-fluid">
//           <NavLink className="navbar-brand" to="/">
//             {/* <img
//               src={require("../image/newlogo.jpeg")}
//               className="logoimg"
//               alt="Miracle logo"
//             /> */}
//           </NavLink>
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleNav}
//             aria-expanded={isNavOpen}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div
//             className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
//             id="navbarNavDropdown"
//           >
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <NavLink
//                   className="nav-link"
//                   aria-current="page"
//                   to="/"
//                   onClick={closeNav} 
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/about" onClick={closeNav} >
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item dropdown">
//                 <NavLink
//                   className="nav-link dropdown-toggle"
//                   to="/cource"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
                  
//                 >
//                   Course
//                 </NavLink>
//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="navbarDropdownMenuLink"
//                 >
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource"  onClick={closeNav} >
//                       PGDSE
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource1"   onClick={closeNav} >
//                       PGDFSE
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource2"   onClick={closeNav} >
//                       PGDIE
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource3"   onClick={closeNav} >
//                       Full Stack MERN
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource4"   onClick={closeNav} >
//                       Full Stack MEAN
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource5"   onClick={closeNav} >
//                       Full Stack Java
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource6"   onClick={closeNav} >
//                       Full Stack Python
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource7"   onClick={closeNav} >
//                       Backend Development
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource8"   onClick={closeNav} >
//                       Frontend Development
//                     </NavLink>
//                   </li>

//                   <li>
//                     <NavLink className="dropdown-item" to="/maincource9"   onClick={closeNav} >
//                       Data Anlytics
//                     </NavLink>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/blog"   onClick={closeNav} >
//                   Blog
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/hire"   onClick={closeNav} >
//                 Recruiters
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/career"   onClick={closeNav} >
//                   Career
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/contact"   onClick={closeNav} >
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//             <form class="d-flex myflexbutton">
//               <button
//                 class="btn btn1b btn-outline-success"
//                 type="submit"
//               >
//               <a href="tel:+917880003127" style={{textDecoration:"none",fontWeight:"700",fontSize:"20px",color:"orangered"}}>+91 7880003127</a>
//               </button>
              
//             </form>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbarbb;
