//import "./Home.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <Carousel id = "home-carousel">
                <Carousel.Item>
                    <img className = "carousel-image" alt="" src="/home_picture_1.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className = "carousel-image" alt="" src="/home_picture_2.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className = "carousel-image" alt="" src="/home_picture_3.png"/>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;