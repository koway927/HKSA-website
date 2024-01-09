import React from 'react';
import './Board.css';
import { AiOutlineMail } from "react-icons/ai";
import jsonData from './board_member_info.json';


// Store the name, position, and email of each person in an array
const people = jsonData.map(person => ({
    name: person.Name,
    position: person.Position,
    email: person.Schoolemail
}));

function Board() {
    return (
        <div className="Board">
            <div id = "board-background">
                <img id = "board-group-picture" alt="" src="/meet_our_board_picture.png"/>
                <h1 id = "board-background-title">Meet Our Board</h1>
            </div>

            <div id = "board-members-container">
                {people.map((person, index) => (
                    <div key={index} className = "board-card">
                        <img className = "board-picture" src="unknown_person.jpg" alt="unknown_person.jpg" />
                        <div className = "board-info-container">
                            <h3 className = "board-member-name">{person.name}</h3>
                            <p className = "board-member-position">{person.position}</p>
                            <a className = "board-embedded-email" href={`mailto:${person.email}`}>
                            <AiOutlineMail className="email_icon" size={30} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Board;