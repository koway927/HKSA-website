// Description: This is the main page of the website. It contains the navigation bar and the routes to different pages.
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaDiscord } from "react-icons/fa";
import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./Home";
import About from "./About";
import Board from "./Board";
import Events from "./Event";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar className ="navbar" expand="md" data-bs-theme="dark" >
          <Container className="fs-6">
          <Link to="/">
            <img href="#home"
                alt=""
                src="/Colored_Logo_No_BG.png"
                width="50"
                height="50"
            />
          </Link>
            <Navbar.Brand as={Link} to="/">
              UIUC HKSA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link className="page_name" as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link className="page_name" as={Link} to="/about">
                  About Us
                </Nav.Link>
                <Nav.Link className="page_name" as={Link} to="/board">
                  Board
                </Nav.Link>
                <Nav.Link className="page_name" as={Link} to="/events">
                  Events
                </Nav.Link>
                <Nav.Link className="page_name" as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/board" element={<Board/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <div className="club-contact">
          <h1 id = "contact-name">Contact Us</h1>
          <div id="organization">
          </div>
          <div id="social-media-icons">
            <h1>UIUC HKSA</h1>
            <h1 id = "follow">Follow Us!</h1>
            <a className = "icon" href="https://www.instagram.com/uiuc.hksa/" target="_blank"><FaInstagram size="4em"></FaInstagram></a>
            <a className = "icon" href="https://discord.gg/BC5FEnGCYs" target="_blank"><FaDiscord size="4em"></FaDiscord></a>
          </div>
        </div>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
