import React, { useState } from 'react';
import Chevron from "@/assets/img/chevron.svg";

const CustomCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = images.length;

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <>
            {totalImages > 1 && (
                <>
                    <button className='previous_slide' onClick={prevSlide}><img src={Chevron} alt="Previous" /></button>
                    <button className='next_slide' onClick={nextSlide}><img src={Chevron} alt="Next" /></button>
                    <span className='current_image'>{currentIndex + 1}/{totalImages}</span>
                </>
            )}
            <img className='wrapper__information-location__carousel__img' src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </>
    );
};

export default CustomCarousel;