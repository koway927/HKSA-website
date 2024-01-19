// Desc: Home page of the website
import React, { useRef  } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

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
                    <Carousel.Item interval = {2000} >
                        <img onClick={nextSlide} className = "carousel-image" alt="" src="/home_picture_2.png"/>
                    </Carousel.Item>
                    <Carousel.Item interval = {2000}>
                        <img onClick={nextSlide} className = "carousel-image" alt="" src="/home_picture_3.png"/>
                    </Carousel.Item>
                </Carousel>

                <div className="club-info">
                    <img id = "home-logo-picture" alt="" src="/Colored_Logo_No_BG.png"/>
                    <div id = "carousel-text">University of Illinois at Urbana-Champaign Hong Kong Student Association</div>
                </div>
            </div>

            <div className="club-about">
                    <h1 id = "about-name">UIUC HKSA</h1>
                    <h3 id = "about-title">What We Are All About</h3>
                    <p id = "about-text">
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
                            <img className = "event-img" src="home_picture\Ice Skating Social.png" alt="event"></img>
                            <div className = "event-text">
                                <h2 className = "event-name">Ice Skating Social</h2>
                                <p className = "event-detail">Date: Saturday,1/20</p>
                                <p className = "event-detail">Time: 1:30-4:30 PM</p>
                                <p className = "event-detail">Location: Ice Arena</p>
                                <p className = "event-detail">
                                    Are you looking for a way embrace the winter cold? 
                                    Are you tired of hibernating?? Have you been waiting for an excuse to go ice skating?!?! 
                                    Come trade in your sneakers for skates and glide on the ice with us on Saturday, January 20th! 
                                    If you plan on attending, please RSVP and make sure to also bring your I-Card with you, as well as 
                                    $3 or your own skates, if you own a pair.
                                </p>
                                <Button className = "event-button" href="https://docs.google.com/forms/d/e/1FAIpQLSe7GycnkLoXuFDKTY3pX3M2-1wBXgq_f68psj4J3zZtUQSZIA/viewform">Sign Up</Button>
                            </div>
                            
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className = "event-container">     
                            <img className = "event-img" src="home_picture\Karaoke night.png" alt="event"></img>
                            <div className = "event-text">
                                <h2 className = "event-name">Karaoke Night</h2>
                                <p className = "event-detail">Date: Friday,1/26</p>
                                <p className = "event-detail">Time: 7-9 PM</p>
                                <p className = "event-detail">Location: Lincoln Hall Room 1002</p>
                                <p className = "event-detail">
                                    Winter may be cold, but our karaoke stage is sizzling! 
                                    Join us in singing (or listening to) your favorite tunes on Friday, January 26th! 
                                    Make sure to RSVP by Wednesday, January 24th so that we can plan appropriately. 
                                    We hope to see you there!!
                                </p>
                                <Button className = "event-button" href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdo7875JBsP8f6MWjBQ4BtQacWRmakMzGeSLI6cJu7x6IrwYA/viewform">Sign Up</Button>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className = "event-container">
                        <div className = "event-text-nopicture">
                            <h2 className = "event-name">Spring Involvement Fair </h2>
                            <p className = "event-detail">Date: Friday,1/31</p>
                            <p className = "event-detail">Time: 7-9 PM</p>
                            <p className = "event-detail">Location: Illini Union</p>
                            <p className = "event-detail">
                            Did you miss us at Quad Day last fall? Want to learn more about us? 
                            Stop by our booth at the Spring Involvement Fair at the Illini Union!
                            </p>
                        </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item>
                    <div className = "event-container">
                        <img className = "event-img" src="home_picture\Spring.png" alt="event"></img>
                        <div className = "event-text">
                            <h2 className = "event-name">Spring General Meeting</h2>
                            <p className = "event-detail">Date: Friday,2/2</p>
                            <p className = "event-detail">Time: 6-7 PM</p>
                            <p className = "event-detail">Location: Lincoln Hall Room 1002</p>
                            <p className = "event-detail">
                            We'll be having our Spring 2024 General Meeting on Friday, February 2nd!! 
                            We'll go over what we do as an organization, introduce our board members, and go over upcoming events. 
                            We'll also have time for any and all questions you may have. We're excited to meet you (or see you again) and 
                            hope you'll join us at Lincoln Hall on Feb 2!
                            </p>
                        </div>
                    </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            
        </div>
           
    );
}

export default Home;