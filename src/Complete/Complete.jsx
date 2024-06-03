import React from 'react';
import './Complete.css';
import Image from './../assets/Done.png';
import { useNavigate } from 'react-router-dom';

const Complete = () => {

    const navigate = useNavigate()

    const toPlayAgain = () => {
       return navigate("/")
    }
    return (
        <>
            <div className="complete">
                <img src={Image} alt="" />
                <button className="play-button"  onClick={() => toPlayAgain()}>
                <i className="fa-solid fa-rotate-right" />
                    <p>Play again</p>
                </button>
            </div>
        </>
    )
}

export default Complete
