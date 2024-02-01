import React, { useEffect,useState}  from 'react';
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import PhotoAlbum from "react-photo-album";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import './Event.css';

function Events() {
    const imageContext = require.context('../public/event_recaps', true, /\.(jpg|JPG)$/);
    const imageNames = imageContext.keys();
    const [open, setOpen] = useState(null);
    const numPhotos = window.innerWidth <= 768 ? 6 : window.innerWidth <= 1200 ? 8 : 10;
    const shuffledPhotos = [...imageNames].sort(() => 0.5 - Math.random());
    const selectedPhotos = shuffledPhotos.slice(0, numPhotos).map(photo => ({
        src: imageContext(photo),
        width: 800 ,
        height: 600,
    }));

    const imagesByFolder = [];
    imageNames.forEach(name => {
        const directory = name.substring(0, name.lastIndexOf('/'));
        if (!imagesByFolder[directory]) {
            imagesByFolder[directory] = [];
        }
        imagesByFolder[directory].push(imageContext(name));
    });

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
                {Object.keys(imagesByFolder).map((events_images, events_images_index) => (
                    <div className = "event-recap" key={events_images_index}>
                        <button type="button" className = "event-recap-button" onClick={() => setOpen(events_images_index)}>
                            <img className = "event-recap-button-picture" src = {imagesByFolder[events_images][0]}></img>
                            <span className="event-recap-caption">{events_images.substring(2)}</span>
                        </button>
                        <Lightbox className = "event-recap-modal"
                            plugins={[Counter,Thumbnails]}
                            counter={{ container: { style: { top: "unset", bottom: 0 } } }}
                            open={open === events_images_index}
                            close={() => setOpen(null)}
                            slides={imagesByFolder[events_images].map(src => ({ src }))}
                        />
                    </div>
                    ))
                }
            </div>

            <div className="event-calender-tooltip">
                
            </div>
            
            <div id = "event-section">
                <h3 className = "event-calender-text">Explore and add our event calendar into your Google Calendar to stay updated on our event schedule.</h3>
                <iframe title="Google Calender" id = "event-calender" src="https://calendar.google.com/calendar/embed?src=c_23a6f34e43761288447763187e7d30333fc04f68e2942ad9e2f0e3e9be4f4de7%40group.calendar.google.com&ctz=America%2FChicago" ></iframe>
            </div>
        </div>
    );
}

export default Events;