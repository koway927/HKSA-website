import React  from 'react';
import './Event.css';

function Events() {
    return (
        <div className="Event">
            <img id = "event-header-picture" alt="" src="/event_picture.png"></img>
            <h1 id = "event_header">Upcoming Events</h1>
            <div id = "event-section">
            <iframe title="Google Calender" id = "event-calender" src="https://calendar.google.com/calendar/embed?src=c_23a6f34e43761288447763187e7d30333fc04f68e2942ad9e2f0e3e9be4f4de7%40group.calendar.google.com&ctz=America%2FChicago" ></iframe>
            </div>
        </div>
    );
}

export default Events;