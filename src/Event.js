import React, { useState}  from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import './Event.css';

function Events() {
   
    const [spring_2024_open, spring_2024_setOpen] = useState(null);
    const [fall_2023_open, fall_2023_setOpen] = useState(null);

    
    const spring_2024_imageContext = require.context('../public/event_recaps/Spring 2024', true, /\.(jpg|JPG)$/);
    const spring_2024_imageNames = spring_2024_imageContext.keys();
    const spring_2024_imagesByFolder = {};

    spring_2024_imageNames.forEach(name => {
        const directory = name.substring(0, name.lastIndexOf('/'));
        if (!spring_2024_imagesByFolder[directory]) {
            spring_2024_imagesByFolder[directory] = [];
        }
        spring_2024_imagesByFolder[directory].push(spring_2024_imageContext(name));
    });

    const fall_2023_imageContext = require.context('../public/event_recaps/Fall 2023', true, /\.(jpg|JPG)$/);
    const fall_2023_imageNames = fall_2023_imageContext.keys();
    const fall_2023_imagesByFolder = {};

    fall_2023_imageNames.forEach(name => {
        const directory = name.substring(0, name.lastIndexOf('/'));
        if (!fall_2023_imagesByFolder[directory]) {
            fall_2023_imagesByFolder[directory] = [];
        }
        fall_2023_imagesByFolder[directory].push(fall_2023_imageContext(name));
    });


    const numPhotos = window.innerWidth <= 768 ? 6 : window.innerWidth <= 1200 ? 8 : 10;

    const imageContext = require.context('../public/event_recaps', true, /\.(jpg|JPG)$/);
    const imageNames = imageContext.keys();
    const shuffledPhotos = [...imageNames].sort(() => 0.5 - Math.random());
    const selectedPhotos = shuffledPhotos.slice(0, numPhotos).map(photo => ({
        src: imageContext(photo),
        width: 800 ,
        height: 600,
    }));
    return (
        <div className="Event">
            <div id = "event-background">
                
                <PhotoAlbum id = "event-header-pictures" layout="masonry" photos={selectedPhotos}/>
                <header>
                    <div id = "event-header">
                        <h1 className = "event-header-text">Event Recaps</h1>
                        <h2 className = "event-header-text">Discover the memorable moments of HKSA!</h2>
                    </div>
                    
                </header>
            </div>
            
            <div id = "event-recap-section">
                <Tabs defaultActiveKey="Spring-2024" id="event-tab" className="mb-3" fill>
                    <Tab eventKey="Spring-2024" title="Spring 2024">
                        <div className = "event-recap-container">
                            {Object.keys(spring_2024_imagesByFolder).map((events_images, events_images_index) => (
                                <div className = "event-recap" key={events_images_index}>
                                    <button type="button" className = "event-recap-button" onClick={() => spring_2024_setOpen(events_images_index)}>
                                        <img className = "event-recap-button-picture" src = {spring_2024_imagesByFolder[events_images][0]} alt = "event recap"></img>
                                        <span className="event-recap-caption">{events_images.substring(2)}</span>
                                    </button>
                                    <Lightbox className = "event-recap-modal"
                                        plugins={[Counter,Thumbnails]}
                                        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                                        open={spring_2024_open === events_images_index}
                                        close={() => spring_2024_setOpen(null)}
                                        slides={spring_2024_imagesByFolder[events_images].map(src => ({ src }))}
                                    />
                                </div>
                                ))
                            }
                        </div>
                    </Tab>
                    <Tab eventKey="Fall-2023" title="Fall 2023">
                        <div className = "event-recap-container">
                            {Object.keys(fall_2023_imagesByFolder).map((events_images, events_images_index) => (
                                <div className = "event-recap" key={events_images_index}>
                                    <button type="button" className = "event-recap-button" onClick={() => fall_2023_setOpen(events_images_index)}>
                                        <img className = "event-recap-button-picture" src = {fall_2023_imagesByFolder[events_images][0]} alt = "event recap"></img>
                                        <span className="event-recap-caption">{events_images.substring(2)}</span>
                                    </button>
                                    <Lightbox className = "event-recap-modal"
                                        plugins={[Counter,Thumbnails]}
                                        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                                        open={fall_2023_open === events_images_index}
                                        close={() => fall_2023_setOpen(null)}
                                        slides={fall_2023_imagesByFolder[events_images].map(src => ({ src }))}
                                    />
                                </div>
                                ))
                            }
                        </div>
                    </Tab>
                </Tabs>
            </div>

            <div className="event-calender-tooltip">
                
            </div>
            
            <div id = "event-section">
                <h3 className = "event-calender-text">Explore and add our event calendar into your Google Calendar to stay updated on our event schedule.</h3>
                <iframe title="Google Calender" id = "event-calender" src="https://calendar.google.com/calendar/embed?src=hksa.uofi%40gmail.com&ctz=Asia%2FChicago" ></iframe>
            </div>
        </div>
    );
}

export default Events;