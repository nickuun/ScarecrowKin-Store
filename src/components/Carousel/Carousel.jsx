import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [validImages, setValidImages] = useState([]);

  useEffect(() => {
    const checkImages = async () => {
      const filteredImages = [];
      for (const image of images) {
        try {
          const response = await fetch(image, { method: 'HEAD' });
          if (response.ok && response.headers.get('Content-Type').startsWith('image/')) {
            filteredImages.push(image);
          }
        } catch (error) {
          console.error('Error checking image:', error);
        }
      }
      setValidImages(filteredImages);
    };

    checkImages();
  }, [images]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? validImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === validImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (validImages.length === 0) {
    return <div>No preview currently available.</div>;
  }

  return (
    <div className="carousel">
      <div className="left-arrow" onClick={goToPrevious}>&#9664;</div>
      <img src={validImages[currentIndex]} alt="product" className="carousel-image" />
      <div className="right-arrow" onClick={goToNext}>&#9654;</div>
      <div className="image-counter">
        {currentIndex + 1}/{validImages.length}
      </div>
    </div>
  );
};

export default Carousel;
