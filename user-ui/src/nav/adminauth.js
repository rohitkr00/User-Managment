import { Routes, Route, Link } from 'react-router-dom';
import Update from '../Auth2/update';
import Home from '../Auth2/Home';
import React from 'react';
import Profile from '../Auth/profile';
import AuthUser from '../Auth2/AuthUser';
import ManageNotification from '../Auth2/managenotification';
import AddTask from '../Auth2/addtask';
import ManageUser from '../Auth/manageuser';
import AdminManageTask from '../Auth2/admintaskpanel';
import About from '../Auth2/about';
import "../Auth2/style.css"
import { Navbar, Container, Nav } from 'react-bootstrap';
import './Topnav.css'


function Adminauth() {
    const {token,logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined){
            logout();
        }
    }
    return (
        <>
             {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" fixed="top">
           <div className="container-fluid justify-content-end">
  <a className="navbar-brand" href="/">
    Admin
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse " id="navbarNavDropdown">
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
      <Link className="nav-link" to="/profile">
                                Profile
            </Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/muser">
                                ManageUser
            </Link>
      </li>
      <li className="nav-item">
            <button role="button" className="btn nav-link" onClick={logoutUser}>Logout</button>
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
            <Nav.Link href="/muser" className='list_item'><h6>ManageUser</h6></Nav.Link>
            <Nav.Link href="/mnotification" className='list_item'><h6>ManageNotifications</h6></Nav.Link>
            <Nav.Link href="/profile" className='list_item'><h6>Profile</h6></Nav.Link>
            <button role="button" className="btn btn-warning m-2 pt-2 list_item1" onClick={logoutUser}><h6>Logout</h6></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            <div className="">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/update" element={<Update />} />
                    <Route path="/muser" element={<ManageUser />} />
                    <Route path="/admintask" element={<AdminManageTask />} />
                    <Route path="/addtask" element={<AddTask />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/mnotification" element={<ManageNotification />} />
                   
                </Routes>
            </div>
        </>
    );
}

export default Adminauth;
