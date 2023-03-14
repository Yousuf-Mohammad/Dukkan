import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./Slider.scss"

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (next) => next + 1);
    };
    const data = [
        "https://img.freepik.com/free-photo/cute-stylish-children-white-studio_155003-9018.jpg?w=1380&t=st=1678781250~exp=1678781850~hmac=b63241d8d481a34289e5dc3f8c9383883f219701cc15f433575b4fd09b5c9247",
        "https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg",
        "https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597179_960_720.jpg",
        "https://cdn.pixabay.com/photo/2017/04/07/16/47/interview-2211354_960_720.jpg"



    ]
    return (
        <div className='slider'>
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img className='img' src={data[0]} alt="" />
                <img className='img' src={data[1]} alt="" />
                <img className='img' src={data[2]} alt="" />
                <img className='img' src={data[3]} alt="" />

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
