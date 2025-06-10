import { useState } from "react";
import "../App.css";

export default function Hero(){
    
  // Section 1: Slider
  const images = [
    '/images/product1.jpg',
    '/images/product2.jpg',
    '/images/product3.jpg',
    '/images/product4.jpg',
    '/images/product5.jpg',
  
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
    

  return (
    <div className="pt-5  bg-[#111111] text-[#d8d0c1] min-h-screen">
        <div className="relative w-full  mx-auto mb-16">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-screen h-110 object-cover rounded-lg shadow-lg"
        />
        {/* Left button */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70"
        >
          &#10094;
        </button>
        {/* Right button */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full hover:bg-opacity-70"
        >
          &#10095;
        </button>
      </div>
    </div>
  )
}