import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 4 ? 0 : (next) => next + 1);
    };
    const data = [
        "https://images.pexels.com/photos/3617850/pexels-photo-3617850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/8351335/pexels-photo-8351335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://cdn.pixabay.com/photo/2017/04/07/16/47/interview-2211354_960_720.jpg",
        "https://images.pexels.com/photos/6044261/pexels-photo-6044261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"



    ]
    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img className='img' src={data[0]} alt="" />
                <img className='img' src={data[1]} alt="" />
                <img className='img' src={data[2]} alt="" />
                <img className='img' src={data[3]} alt="" />
                <img className='img' src={data[4]} alt="" />

            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <ArrowBackIosIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <ArrowForwardIosIcon />
                </div>
            </div>

        </div>
    );
}

export default Slider;
