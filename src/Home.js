// Desc: Home page of the website
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { GiLoveLetter } from "react-icons/gi";
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="home-background">
                <Carousel id = "home-carousel" fade indicators = {false} controls = {false}>
                    <Carousel.Item interval = {2000}>
                        <img className = "carousel-image" alt="" src="/home_picture_1.png"/>
                    </Carousel.Item >
                    <Carousel.Item interval = {2000} >
                        <img className = "carousel-image" alt="" src="/home_picture_2.png"/>
                    </Carousel.Item>
                    <Carousel.Item interval = {2000}>
                        <img className = "carousel-image" alt="" src="/home_picture_3.png"/>
                    </Carousel.Item>
                </Carousel>

                <div className="club-info">
                    <img id = "home-logo-picture" alt="" src="/Colored_Logo_No_BG.png"/>
                    <div id = "carousel-text">University of Illinois at Urbana-Champaign Hong Kong Student Association</div>
                </div>
            </div>
            <div className="club-about">
                    <div id = "about-name">UIUC HKSA</div>
                    <div id = "about-title">What We Are All About</div>
                    <p id = "about-text">
                        Hong Kong Student Association is a social and cultural Registered Student Organization
                        in the University of Illinois at Urbana-Champaign (UIUC HKSA). We are committed to spread awareness, 
                        understanding and appreciation of HongKongese culture. We not only provide a platform for HongKongese students to connect, but also
                        encourage students from different cultural backgrounds to join our community.
                    </p>
                    <Button id = "learn-more-button" href="/about">Learn more</Button>
            </div>
            <div className="club-contact">
                <h1 id = "contact-name">Contact Us</h1>
                <div id="organization">
                    <img id = "home-contact-logo-picture" alt="" src="/Colored_Logo_No_BG.png"/>
                    <h1>UIUC HKSA</h1>
                </div>
                <div id = "home-icon-container">
                    <a id = "home-email-icon-link" href="mailto:hksa.uofi@gmail.com">
                        <AiOutlineMail className = "home-social-icon" size={50}></AiOutlineMail>
                    </a>
                    <a id = "home-instagram-icon-link" href="https://www.instagram.com/uiuc.hksa?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                            <FaInstagram className = "home-social-icon" size={50}></FaInstagram>
                    </a>
                    <a id = "home-discord-icon-link" href="https://discord.gg/BC5FEnGCYs">
                            <FaDiscord className = "home-social-icon" size={50}></FaDiscord>
                    </a>
                    <a id = "home-newsletter-icon-link" href="https://gmail.us8.list-manage.com/subscribe?u=34595721dc9c61017bba4ffcd&id=1a25ff137d">
                        <GiLoveLetter className = "home-social-icon" size={50}  ></GiLoveLetter>
                    </a>
                </div>
                </div>   
            </div>
    );
}

export default Home;