import React from 'react';
import './DashBoard.css';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {

    const navigate = useNavigate();

    const goToNewPage = () => {
        return navigate("/slider");
    }

    return (
        <>
            <div className="inner-content">
                <h1>
                    Addition and Subtraction
                </h1>
                <h1>Facts within 20</h1>
                <p>
                    Test your knowledge with the following questions, tap a card to
                </p>
                <p>flip if and uncover the answer, good luck!</p>
                <button className="play-button">
                    <i className="fa-regular fa-circle-play"></i>
                    <p onClick={() => goToNewPage()}>Let's play</p>
                </button>
            </div>
        </>
    )
}

export default DashBoard;
