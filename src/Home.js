// Desc: Home page of the website
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FaInstagram, FaDiscord } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
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
                    <a href="/about">Learn more</a>
            </div>
        <div className="club-contact">
          <h1 id = "contact-name">Contact Us</h1>
          <div id="organization">
          </div>
          <div id="social-media-icons">
            <h1>UIUC HKSA</h1>
            <h1 id = "follow">Follow Us!</h1>
            <a className = "icon" href="https://www.instagram.com/uiuc.hksa?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==" target="_blank"><FaInstagram size="4em"></FaInstagram></a>
            <a className = "icon" href="https://discord.gg/BC5FEnGCYs" target="_blank"><FaDiscord size="4em"></FaDiscord></a>
          </div>
        </div>
            
        </div>
    );
}

export default Home;