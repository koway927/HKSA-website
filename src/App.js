// Description: This is the main page of the website. It contains the navigation bar and the routes to different pages.
import { BrowserRouter ,Routes, Route, Link,NavLink } from "react-router-dom";
import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
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
  var elements = document.querySelectorAll('#about-text, #mission-statement-text, #involvement-text');
  
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
