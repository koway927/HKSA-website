// Description: This is the main page of the website. It contains the navigation bar and the routes to different pages.
import { BrowserRouter ,Routes, Route, Link,NavLink } from "react-router-dom";
import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './Home.css';
import './About.css';
import Home from "./Home";
import About from "./About";
import Board from "./Board";
import Events from "./Event";
import Contact from "./Contact";

window.onscroll = function( ) {
  scroll_animation()
};
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) &&
      (rect.top <= 0 || rect.bottom >= 0)
  );
}

function scroll_animation() {
  var elements = document.querySelectorAll('#upcoming-events, .about-text, #about-text, #mission-statement-text, #involvement-text, .row');
  
  elements.forEach(function (element) {
      if (isElementInViewport(element)) {
          element.classList.add('active');
      }
  });
}

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
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
                <Nav.Link className="page_name"  as={NavLink} to="/" exact activeClassName="active"> {/*activeClassName applies a class to the link when its route is active.*/}
                  Home
                </Nav.Link>
                <Nav.Link className="page_name" as={NavLink} to="/about" activeClassName="active">
                  About Us
                </Nav.Link>
                <Nav.Link className="page_name" as={NavLink} to="/board" activeClassName="active">
                  Board
                </Nav.Link>
                <Nav.Link className="page_name" as={NavLink} to="/events" activeClassName="active">
                  Events
                </Nav.Link>
                <Nav.Link className="page_name" as={NavLink} to="/contact" activeClassName="active">
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
        
    </div>
    </BrowserRouter>
  
  );
}

export default App;
