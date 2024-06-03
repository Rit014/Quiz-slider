import React from 'react';
import DashBoard from '../DashBoard/DashBoard';
import Slider from '../Slider/Slider';
import Complete from '../Complete/Complete';
import './Background.css';
import House from './../assets/BackgroundImage.png';
import Developer from './../assets/logo.jpg';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

const Background = () => {
    const [toggle, setToggle] = useState(true);

    // slide data
    const slides = [
        {
            id: 1,
            question: "assets/question1.png",
            answer: "assets/Image1.png",
        },
        {
            id: 2,
            question: "assets/Question2.png",
            answer: "assets/Image2.png",
        },
        {
            id: 3,
            question: "assets/Question3.png",
            answer: "assets/Image3.png",
        },
        {
            id: 4,
            question: "assets/Question4.png",
            answer: "assets/Image4.png",
        },
        {
            id: 5,
            question: "assets/Question5.png",
            answer: "assets/Image5.png",
        },
        {
            id: 6,
            question: "assets/Question6.png",
            answer: "assets/Image6.png",
        },
        {
            id: 7,
            question: "assets/Question7.png",
            answer: "assets/Image7.png",
        },
        {
            id: 8,
            question: "assets/Question8.png",
            answer: "assets/Image8.png",
        },
        {
            id: 9,
            question: "assets/Question9.png",
            answer: "assets/Image9.png",
        },
        {
            id: 10,
            question: "assets/Question10.png",
            answer: "assets/Image10.png",
        },
    ]

    return (
        <>
            <div className="hero">
                <div className="background-img">
                    <img src={House} id="background" alt="" />
                </div>
                <div className="content">
                    <nav className='nav'>
                        <div className='inner-container'>
                            <div className='logo'>
                                <img src={Developer} id="logo" alt="" width="30px" height="30px" />
                            </div>
                            <div className="logo-heading">
                                <p style={{ fontSize: '13px', fontWeight: 'bold' }}>Cloudifyapp Pvt. Ltd.</p>
                                <p>By Jhon Doe</p>
                            </div>
                        </div>
                        <div className="volumn">
                            <h1 onClick={() => setToggle(!toggle)}>{
                                toggle ? <i className="fa-solid fa-volume-high" /> : <i className="fa-solid fa-volume-xmark" />
                            }
                            </h1>
                        </div>
                    </nav>
                    <div className="dash-board">
                        <Routes>
                            <Route path="/" element={<DashBoard />} />
                            <Route path="/slider" element={<Slider slides={slides} />} />
                            <Route path="/complete" element={<Complete />} />
                        </Routes>
                        <div className="footer">
                            Powered by <span> CLOUDIFYAPPS PVT. ltd.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Background;
