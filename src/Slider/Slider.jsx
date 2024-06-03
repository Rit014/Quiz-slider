import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Slider.css';

const Slider = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? 0 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? navigate("/complete") : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    // to go particular slide
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <>
            <div className="slider">
                <div className="numbering">
                    {`${currentIndex + 1}/10`} {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={slideIndex + 1 === currentIndex + 1 ? "white-dot" : "gray-dot"}>•</div>
                    ))}
                </div>
                <div className="moves">
                    <div className="moveBackward" onClick={goToPrevious}><i class="fa-solid fa-angle-left" /></div>
                    <div className="rotate slides" onClick={() => setToggle(!toggle)}>
                        {
                            toggle ? <img src={slides[currentIndex].question} alt="" /> : <img src={slides[currentIndex].answer} alt="" />
                        }
                    </div>
                    <div className="moveForward" onClick={goToNext}><i class="fa-solid fa-angle-right" /></div>
                </div>
            </div>
        </>
    )
}

export default Slider
