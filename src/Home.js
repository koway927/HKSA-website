// Desc: Home page of the website
import React, { useRef  } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GiLoveLetter } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import './Home.css';


function Home() {
    const carouselRef = useRef();
    const nextSlide = () => {
        carouselRef.current.next();
    };
    
    return (
        <div className="Home">
            <div className="home-background">
                <Carousel ref={carouselRef} id = "home-carousel"  fade = {true}  touch = {true} indicators = {false} controls = {false}>
                    <Carousel.Item interval = {2000}>
                        <img onClick={nextSlide} className = "carousel-image" alt="" src="/home_picture_1.png"/>
                    </Carousel.Item >
                    <Carousel.Item interval = {2500} >
                        <img onClick={nextSlide} className = "carousel-image" alt="" src="/home_picture_2.png"/>
                    </Carousel.Item>
                    <Carousel.Item interval = {2500}>
                        <img onClick={nextSlide} className = "carousel-image" alt="" src="/home_picture_3.png"/>
                    </Carousel.Item>
                </Carousel>

                <div className="club-info">
                    <img id = "home-logo-picture" alt="" src="/Colored_Logo_No_BG.png"/>
                    <header id = "carousel-text">University of Illinois at Urbana-Champaign Hong Kong Student Association</header>
                </div>
            </div>

            <div className="club-about">
                    <h1 id = "about-name">UIUC HKSA</h1>
                    <h3 id = "about-title">What We Are All About</h3>
                    <p id = "home-about-text">
                        Hong Kong Student Association is a registered social and cultural student organization
                        at the University of Illinois at Urbana-Champaign (UIUC HKSA). We are committed to spreading awareness, 
                        understanding and appreciation of HongKongese culture. We not only provide a platform for HongKongese students to connect, but also
                        encourage students from different cultural backgrounds to join our community.
                    </p>
                    <Button id = "learn-more-button" ><NavLink id = "learn-more" to="/about">Learn more</NavLink></Button>
            </div>
            
            <div id = "upcoming-events">
                <Carousel id = "upcoming-events-carousel" data-bs-theme="dark" touch = {true} interval={null} style={{ width: '100vw'}}>
                    <Carousel.Item>
                    <div className = "event-container">
                        <img className = "event-img" src="home_picture\Valentine's_Cookies_Fundraiser.png" alt="event"></img>
                        <div className = "event-text">
                            <h2 className = "event-name">Valentine's Goodie Bags Pre-Order</h2>
                            <p className = "event-detail"><strong>Pre-Order By:</strong> Tuesday, 2/10 <strong>(Extended)</strong></p>
                            <p className = "event-detail"><strong>Pick Up At:</strong> Game Night (2/9)/arts and crafts (2/13)</p>
                            <p className = "event-detail">
                            Send your special someone (or friend) something special this Valentine's! For only $6, our goodie bag contains: 1 sugar cookie, 1 almond cookie, 1 vial of origami roses, candy, and a custom message!
                            Pickup is available at Mahjong Night (2/9) or at Arts and Crafts (2/13). Don't wait and pre-order today!            
                            </p>
                            <Button className = "event-button" href="https://docs.google.com/forms/d/e/1FAIpQLSdDDhr3jGqf3dZSLN3TwKM9gHNsge9h9EY-cHdfEUQizgtvyg/viewform">Pre-Order</Button>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className = "event-container">
                        <img className = "event-img" src="home_picture\Valentine’s_Day_Arts_and_Crafts.png" alt="event"></img>
                        <div className = "event-text">
                            <h2 className = "event-name">Valentine's Arts and Crafts</h2>
                            <p className = "event-detail"><strong>Date:</strong> Tuesday, 2/13</p>
                            <p className = "event-detail"><strong>Time:</strong> 7-9 PM</p>
                            <p className = "event-detail"><strong>Location:</strong> ISR Seminar Room 94AB</p>
                            <p className = "event-detail">
                            Bring a special someone, a friend, or just yourself to ISR  Seminar Rooms 94AB 
                            as we make heart explosion boxes and mini heart cards! Let us know you're coming and don't forget to RSVP!
                            </p>
                            <p className = "event-detail"><strong>RSVP by 2/9</strong></p>
                            <Button className = "event-button" href=" https://docs.google.com/forms/d/e/1FAIpQLSeLmoW6TvR0xxxteVEVI0krx6ed03DyItFLkI9RM1AyLAbKjw/viewform">Sign Up</Button>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className = "event-container">
                        <img className = "event-img" src="home_picture\Retro_Cafe.png" alt="event"></img>
                        <div className = "event-text">
                            <h2 className = "event-name">HK-Style Retro Cafe</h2>
                            <p className = "event-detail"><strong>Date:</strong> Saturday, 2/17 and Sunday, 2/18</p>
                            <p className = "event-detail"><strong>Time:</strong> 2-5 PM (2/17) and 12-3 PM (2/18)</p>
                            <p className = "event-detail"><strong>Location:</strong> Asian American Cultural Center</p>
                            <p className = "event-detail">
                            Join us for HKSA's BIGGEST EVENT yet! HKSA is launching our first Retro Cafe! From 2-5PM on Saturday (2/17) and 12-3PM on Sunday (2/18), 
                            we will be at the AACC, 
                            whipping up some HK classics, 
                            like pineapple buns with butter, french toast, milk tea, lemon tea, and more! 
                            Additionally, each hour, there will be a different mini pop-up event--karaoke, origami, 
                            and even some of our board members in maid costumes....
                            </p>
                            <p className = "event-detail">
                            If any of that floats your boat, 
                            feel free to reserve a table for 30 minutes on either day (discount included)! 
                            You can also peruse our other menu items and mini events through the reservation link. 
                            If you can't decide now, we will be taking walk-ins on a first come first serve basis as availability lasts. 
                            We hope to see you there!!! &lt;3
                            </p>
                            <p className = "event-detail"><strong>Reserve by Thursday, 2/15 to receive a $1.00 discount!</strong></p>
                            <Button className = "event-button" href=" https://docs.google.com/forms/d/e/1FAIpQLSeLmoW6TvR0xxxteVEVI0krx6ed03DyItFLkI9RM1AyLAbKjw/viewform">Reserve Now</Button>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className = "event-container">
                        <div className = "event-text">
                            <h2 className = "event-name">Cantonese Tutoring Application</h2>
                            <p className = "event-detail"><strong>Application Deadline</strong>: Thursday, 2/15 11:59PM</p>
                            <p className = "event-detail">
                            We are launching a trial run for our Cantonese tutoring program and are looking for 
                            learners and tutors to test logistics/curriculum! As a result, we cannot bring everyone 
                            on for the trial run but greatly appreciate your interest.
                            </p>
                            <Button className = "event-button" href="https://docs.google.com/forms/d/e/1FAIpQLScVpTQ6o0Mpn8AJZhYUaMn_--vIHbOGB6MPfUyuEWtl882ToQ/viewform">Apply Now</Button>
                        </div>
                    </div>
                    
                    </Carousel.Item>
                    
                </Carousel>
            </div>

            <div className="club-contact">
                <h1 id = "contact-name">Contact Us</h1>
                <div id = "home-icon-container">
                    <a id = "home-email-icon-link" href="mailto:hksa.uofi@gmail.com">
                        <AiOutlineMail className = "home-social-icon" size={50}></AiOutlineMail>
                    </a>
                    <a id = "home-instagram-icon-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uiuc.hksa/?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA%3D%3D">
                            <FaInstagram className = "home-social-icon" size={50}></FaInstagram>
                    </a>
                    <a id = "home-discord-icon-link" target="_blank" rel="noopener noreferrer" href="https://discord.gg/BC5FEnGCYs">
                            <FaDiscord className = "home-social-icon" size={50}></FaDiscord>
                    </a>
                    <a id = "home-newsletter-icon-link" target="_blank" rel="noopener noreferrer" href="https://gmail.us8.list-manage.com/subscribe?u=34595721dc9c61017bba4ffcd&id=1a25ff137d">
                        <GiLoveLetter className = "home-social-icon" size={50}  ></GiLoveLetter>
                    </a>
                </div>
            </div> 
        </div>
           
    );
}

export default Home;