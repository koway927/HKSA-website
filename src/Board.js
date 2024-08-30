import React from 'react';
import './Board.css';
import { AiOutlineMail } from "react-icons/ai";
import jsonData from './board_member_info/board_member_info.json';

const board_section = ["Executive Board", "Event Committee", "Fundraising Committee", "Social Committee"]
// Store the name, position, and email of each person in an array
const people = jsonData.map(person => ({
    name: person.Name,
    position: person.Position,
    board_section: person.Boardsection,
    email: person.Schoolemail
}));

function Board() {
    return (
        <div className="Board">
            <div id = "board-background">
                <img id = "board-group-picture" alt="" src="/meet_our_board_picture_cropped.png"/>
                <header>
                    <h1 id = "board-background-title">Meet Our Board</h1>
                </header>
                
            </div>

            <div id = "board-container">
                {board_section.map((section, section_index) => (
                    <div key={section_index} className="board-section-container">
                        <h1 className = "board-section-title">{section}</h1>
                        <div className = "board-section">
                            {people.filter(person => person.board_section.includes(section)).map((person, member_index) => (
                                <div key={member_index} className = "board-card">
                                    <img className = "board-picture" alt={person.name} src= {`/board_pictures/${person.name}.jpg`} onError={(e)=>{e.target.onerror = null; e.target.src=`/board_pictures/no_image_available.png`}} />
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
                ))}
            </div>
        </div>
        
    );
}

export default Board;