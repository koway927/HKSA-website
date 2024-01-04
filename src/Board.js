import React from 'react';
import './Board.css';
import { AiOutlineMail } from "react-icons/ai";

function Board() {
    return (
        <div className="Board">
            <div id = "board-background">
                <img id = "board-picture" alt="" src="/meet_our_board_picture.png"/>
                <h1>Meet Our Board</h1>
            </div>
            <div id = "board-members-container">
                <div class="board-row">
                    <div class="board-column">
                        <div class="board-card">
                            <img class="board-picture"src="unknown_person.jpg" alt="unknown_person.jpg"></img>
                            <div class="board-info-container">
                                <h3 class="board-member-name"> Nicholas Yeung'25</h3>
                                <p class="board-member-title">President</p>
                                <a class="board-embedded-email" href="mailto:yinokny2@illinois.edu"><AiOutlineMail className = "email_icon" size ={30}></AiOutlineMail></a>
                                
                            </div>
                        </div>
                    </div>

                    <div class="board-column">
                        <div class="board-card">
                            <img class="board-picture" src="unknown_person.jpg" alt="unknown_person.jpg"></img>
                            <div class="board-info-container">
                                <h3 class="board-member-name">Marcus Fung'26</h3>
                                <p class="board-member-title">Vice-President Internal</p>
                                <a class="board-embedded-email" href="mailto:ylfung2@illinois.edu"><AiOutlineMail className = "email_icon" size ={30}></AiOutlineMail></a>
                            </div>
                        </div>
                    </div>

                    <div class="board-column">
                        <div class="board-card">
                            <img class="board-picture" src="unknown_person.jpg" alt="unknown_person.jpg"></img>
                            <div class="board-info-container">
                                <h3 class="board-member-name">Felicity Lo'26</h3>
                                <p class="board-member-title">Vice-President External</p>
                                <a class="board-embedded-email" href="mailto:fklo2@illinois.edu"><AiOutlineMail className = "email_icon" size ={30}></AiOutlineMail></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="board-row">
                    <div class="board-column">
                        <div class="board-card">
                            <img class="board-picture"src="unknown_person.jpg" alt="unknown_person.jpg"></img>
                            <div class="board-info-container">
                                <h3 class="board-member-name"> Nicholas Yeung'25</h3>
                                <p class="board-member-title">President</p>
                                <a class="board-embedded-email" href="mailto:yinokny2@illinois.edu"><AiOutlineMail className = "email_icon" size ={30}></AiOutlineMail></a>
                                
                            </div>
                        </div>
                    </div>

                    <div class="board-column">
                        <div class="board-card">
                            <img class="board-picture" src="unknown_person.jpg" alt="unknown_person.jpg"></img>
                            <div class="board-info-container">
                                <h3 class="board-member-name">Marcus Fung'26</h3>
                                <p class="board-member-title">Vice-President Internal</p>
                                <a class="board-embedded-email" href="mailto:ylfung2@illinois.edu"><AiOutlineMail className = "email_icon" size ={30}></AiOutlineMail></a>
                            </div>
                        </div>
                    </div>

                    <div class="board-column">
                        <div class="board-card">
                            <img class="board-picture" src="unknown_person.jpg" alt="unknown_person.jpg"></img>
                            <div class="board-info-container">
                                <h3 class="board-member-name">Felicity Lo'26</h3>
                                <p class="board-member-title">Vice-President External</p>
                                <a class="board-embedded-email" href="mailto:fklo2@illinois.edu"><AiOutlineMail className = "email_icon" size ={30}></AiOutlineMail></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    );
}

export default Board;