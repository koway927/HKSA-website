import React from 'react';
import './Contact.css';
import {FaInstagram, FaDiscord } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { InstagramEmbed } from 'react-social-media-embed';
import { GiLoveLetter } from "react-icons/gi";

function Contact() {
    return (
        <div className="Contact">
            <div id = "contact-header">
                <h1 id = "contact-title">Contact Us</h1>
                <p id = "contact-content">Stay connected with us on social media and subscribe to our newsletter for the latest updates!</p>
            </div>

            <div id = "contact-method-section">

                    <div className = "method">
                        <p className = "media-description">Join our Discord server for updates!</p>
                        <a id = "discord-icon-link" target="_blank" rel="noopener noreferrer" href="https://discord.gg/BC5FEnGCYs">
                            <FaDiscord className = "icon" size={170}></FaDiscord>
                        </a>
                        <div id = "discord-text-link-container">
                            <a id = "discord-text-link" target="_blank" rel="noopener noreferrer" href="https://discord.gg/BC5FEnGCYs">
                                <p className = "media-description">Discord Server</p>
                            </a>
                        </div>
                    </div>
                    
                    <div className = "method">
                    <p className = "media-description">Reach out to us with any questions!</p>
                        <a id = "email-icon-link" href="mailto:hksa.uofi@gmail.com">
                            <AiOutlineMail className = "icon" size={170}></AiOutlineMail>
                        </a>
                        <a id = "email-text-link" href="mailto:hksa.uofi@gmail.com">
                            <p className = "media-description">hksa.uofi@gmail.com</p>
                        </a>
                    </div>
  
 
                    <div className = "method">
                        <p className = "media-description">Follow us on Instagram!</p>
                        <a id = "instagram-icon-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uiuc.hksa?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                            <FaInstagram className = "icon" size={170}  ></FaInstagram>
                        </a>
                        <div id = "instagram-text-link-container">
                            <a id = "instagram-text-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/uiuc.hksa?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                                <p className = "media-description">@uiuc.hksa</p>
                            </a>
                        </div>                     
                    </div>

                    <div className = "method">
                        <InstagramEmbed id = "instagram-page" url="https://www.instagram.com/uiuc.hksa/"/>
                    </div>
                    
                    <div className = "method">
                        <p className = "media-description">Subscribe to our biweekly newsletter!</p>
                        <a id = "newsletter-icon-link" target="_blank" rel="noopener noreferrer" href="https://gmail.us8.list-manage.com/subscribe?u=34595721dc9c61017bba4ffcd&id=1a25ff137d">
                            <GiLoveLetter className = "icon" size={170}  ></GiLoveLetter>
                        </a>
                        <a id = "newsletter-text-link" target="_blank" rel="noopener noreferrer" href="https://gmail.us8.list-manage.com/subscribe?u=34595721dc9c61017bba4ffcd&id=1a25ff137d">
                            <p className = "media-description">Newsletter</p>
                        </a>
                        
                    </div>

                    <img id = "newsletter-picture" alt="" src="/newsletter_picture.png"/>
       
            </div>
        </div>
    );
}

export default Contact;