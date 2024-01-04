import React  from 'react';
import './Event.css';


function Events() {
    return (
        <div className="Event">
            <img id = "event-header-picture" alt="" src="/event_picture.png"></img>
            <h1 id = "event_header">Upcoming Events</h1>
            <div id = "event-section">
                <iframe title="Google Calender" id = "event-calender" src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FChicago" ></iframe>
            </div>
        </div>
    );
}

export default Events;