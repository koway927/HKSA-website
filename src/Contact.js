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
                <p id = "contact-content">Stay connected with us on social media and subscribe to our newspaper for the latest updates!</p>
            </div>

            <div id = "contact-method-section">

                    <div className = "method">
                        <h2 className = "media-description">Join our Discord server for updates!</h2>
                        <a id = "discord-icon-link" target="_blank" href="https://discord.gg/BC5FEnGCYs">
                            <FaDiscord className = "icon" size={170}></FaDiscord>
                        </a>
                        <div id = "discord-text-link-container">
                            <a id = "discord-text-link" target="_blank" href="https://discord.gg/BC5FEnGCYs">
                                <h2 className = "media-description">Discord Server</h2>
                            </a>
                        </div>
                    </div>
                    
                    <div className = "method">
                        <a id = "email-text-link" href="mailto:hksa.uofi@gmail.com">
                            <h2 className = "media-description">hksa.uofi@gmail.com</h2>
                        </a>
                        <a id = "email-icon-link" href="mailto:hksa.uofi@gmail.com">
                            <AiOutlineMail className = "icon" size={170}></AiOutlineMail>
                        </a>
                    </div>
  
 
                    <div className = "method">
                        <h2 className = "media-description">Follow us on Instagram!</h2>
                        <a id = "instagram-icon-link" target="_blank" href="https://www.instagram.com/uiuc.hksa?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                            <FaInstagram className = "icon" size={170}  ></FaInstagram>
                        </a>
                        <div id = "instagram-text-link-container">
                            <a id = "instagram-text-link" target="_blank" href="https://www.instagram.com/uiuc.hksa?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                                <h2 className = "media-description">@uiuc.hksa</h2>
                            </a>
                        </div>                     
                    </div>

                    <InstagramEmbed id = "instagram-page" url="https://www.instagram.com/uiuc.hksa/"/>

                    <div className = "method">
                        <h2 className = "media-description">Subscribe to our biweekly newsletter!</h2>
                        <a id = "newsletter-icon-link" target="_blank" href="https://gmail.us8.list-manage.com/subscribe?u=34595721dc9c61017bba4ffcd&id=1a25ff137d">
                            <GiLoveLetter className = "icon" size={170}  ></GiLoveLetter>
                        </a>
                        <h2 className = "media-description">Newsletter</h2>
                    </div>

                    <img id = "newsletter-picture" alt="" src="/newsletter_picture.png"/>
       
            </div>
        </div>
    );
}

export default Contact;