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
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }}>
        <img style={{
            marginTop: '20px',
            marginBottom: '20px'
        }} className="event-img" src="home_picture/HKSA_Merch_Ad.png" alt="event"></img>
        <div >
            <h2 style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#ff4500',
                marginBottom: '10px'
            }}>🔥 HKSA Merch!! HKSA Merch!! 🔥</h2>
            <p style={{
                fontSize: '18px',
                marginBottom: '50px'
            }}>
                Merch on sale while supplies last! Get your exclusive HKSA merchandise now and show your support!
            </p>
            </div>  
    </div>
</Carousel.Item>
                    <Carousel.Item>
                        <div className = "event-container">
                            <img className = "event-img" src="home_picture\HKSA_Chicago_Trip.png" alt="event"></img>
                            <div className = "event-text-nopicture">
                                <h2 className = "event-name">HKSA Chicago Trip</h2>
                                <p className = "event-detail">Date: Saturday, 4/5</p>
                                <p className = "event-detail">
                                HKSA is planning a day-trip to Chicago on April 5th! We will be back by 9pm--if you're interested, our RSVP form opens at 3pm on March 2nd! First come, first serve, so register fast!
                                Additionally, please let us know if you are willing to make the drive! Gas costs will be subsidized.
                                </p>
                                <Button className = "event-button" href="https://forms.gle/C1j3waFsFH7CywaW7">RSVP</Button>
                            </div>
                        </div>
                    </Carousel.Item>

                
                    {/*
                    <Carousel.Item>
                        <div className = "event-container">
                            <img className = "event-img" src="home_picture\Mahjong_Nights.png" alt="event"></img>
                            <div className = "event-text-nopicture">
                                <h2 className = "event-name">Mahjong Nights</h2>
                                <p className = "event-detail">Date: Every Saturday </p>
                                <p className = "event-detail">Time: 6-9PM</p>
                                <p className = "event-detail">Location: Noyes room 157</p>
                                <p className = "event-detail">
                                    Compete in team-oriented games! No experience required! Come play Mahjong!
                                </p>
                                {
                                //<p className = "event-detail"><strong>RSVP by 4/10</strong></p>
                                //<Button className = "event-button" href="https://forms.gle/iZYF3braM3pnuswf6">RSVP</Button>
                                }
                            </div>
                        </div>
                    </Carousel.Item>
                    */}
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