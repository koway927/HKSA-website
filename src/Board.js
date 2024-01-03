import React from 'react';
import './Board.css';

function Board() {
    return (
        <div className="Board">
            <div id = "board-background">
                <img id = "board-picture" alt="" src="/meet_our_board_picture.png"/>
                <h1>Meet Our Board</h1>
            </div>
            <div class="row">
                <div class="column">
                    <div class="card">
                    <img src="unknown_person.jpg" alt="unknown_person.jpg"></img>
                    <div class="container">
                        <h2>Jane Doe</h2>
                        <p class="title">CEO &amp; Founder</p>
                        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                        <p>example@example.com</p>
                        <p><button class="button">Contact</button></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Board;