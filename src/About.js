import React from 'react';
import './About.css';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";

function About() {
    return (
        <div className= "About">
            <div id = "about-us">
                <h1 className = "title">About UIUC HKSA</h1>
                <h3 className = "title">Sharing Excitement. Sharing Ideas. Sharing Community.</h3>
                <p id = "about-text">
                    The Hong Kong Student Association of the University of Illinois at Urbana-Champaign (UIUC HKSA) 
                    is a vibrant and dynamic student organization dedicated to fostering a sense of community and cultural exchange among 
                    students hailing from Hong Kong or those with an interest in Hong Kong culture.
                </p>
            </div>

            <div id = "mission-statement-block">
                    <Carousel id = "about-carousel" indicators = {false}>
                        <Carousel.Item >
                            <img className = "about-carousel-image" alt="" src="/about_picture_1.png"/>
                        </Carousel.Item >
                        <Carousel.Item  >
                            <img className = "about-carousel-image" alt="" src="/about_picture_2.png"/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img className = "about-carousel-image" alt="" src="/about_picture_3.png"/>
                        </Carousel.Item>
                    </Carousel>
                <div id = "mission-statement">
                    <h1 className = "title">Mission Statement</h1>
                    <p id = "mission-statement-text">
                        UIUC HKSA is committed to promoting Hong Kong culture to the wider community. 
                        The association regularly collaborates with other student organizations to host events that 
                        showcase Hong Kong's unique culture and traditions. Through these events, UIUC HKSA hopes to foster
                        a greater understanding and appreciation of Hong Kong culture among the wider community.
                    </p>
                </div>
            </div>

            <div id = "involvement-block">
                    <h1 id = "involvement-title">Get Involved</h1>
                    <p id = "involvement-text">
                        HKSA provides numerous opportunities for you to engage with the Hong Kong and Chinese community. 
                        We organize various events throughout the year, including game nights, Cantonese tutoring sessions, 
                        fundraisers, and cultural dinners. Whether you're interested in friendly competitions, exploring cultural aspects, 
                        contributing to a good cause, or enjoying delicious meals with fellow members — we assure you'll find a 
                        welcoming space and activity that suits your interests!
                    </p>
            </div>
            
            <div className="row">
                <div className="column">
                    <div className="column-inner">
                        <img src="fundraiser_picture.png" alt="fundraiser"></img>
                        <div className="regular-event-content">
                            <h2 className = "regular-event-name">Cozy Pastry Fundraiser</h2>
                            <p className = "regular-event-detail">Time: Monday, 2/24; Wednesday, 2/26 11:15-4PM</p>
                            <p className = "regular-event-detail">Location: Illini Union (Southwest Vestibule)</p>
                        </div>
                    </div>
                    </div>
                <div className="column">
                    <div className="column-inner">
                        <img src="mahjongNight_picture.png" alt="mahjongNight"></img>
                        <div className="regular-event-content">
                            <h2 className = "regular-event-name">Game Night</h2>
                            <p className = "regular-event-detail">Time:Saturdays 6-9PM</p>
                            <p className = "regular-event-detail">Location:Noyes Lab 157* </p>
                        </div>
                    </div>
                    </div>
                <div className="column">
                    <div className="column-inner">
                        <img src="contonese_corner_picture.png" alt="contonese corner"></img>
                        <div className="regular-event-content">
                            <h2 className = "regular-event-name">Cantonese Tutoring</h2>
                            <p className = "regular-event-detail">Time: Sunday 2PM**</p>
                            <p className = "regular-event-detail">Location: Lincoln Hall Room 1064**</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className = "regular-event-detail-reminder">*Location subject to change; check our Discord/Instagram for any and all updates. </p>
            <p className = "regular-event-detail-reminder">**Location and timing can be adjusted based on the preferences of each tutoring group. </p>
            <div id = "event-link">
                <span>Check out our </span><NavLink id = "event-hyper-link" to="/events">event</NavLink><span> page for more information!</span>
            </div>
        </div>
    );
}

export default About;