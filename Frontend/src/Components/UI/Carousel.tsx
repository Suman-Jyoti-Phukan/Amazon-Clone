import { useState } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const images = [
    "images/Carousel (1).jpg",
    "images/Carousel (2).jpg",
    "images/Carousel (3).jpg",
    "images/Carousel (4).jpg",
    "images/Carousel (5).jpg",
    "images/Carousel (6).jpg",
    "images/Carousel (7).jpg",
  ];

  const currentImage = images[currentIndex];

  return (
    <div className="relative">
      <div className="w-full h-[20rem] bg-cover bg-center">
        <img src={`${currentImage}`} alt="Banner" loading="lazy" />
      </div>
      <button
        className="absolute top-[47%] left-6 transform -translate-y-1/2 h-60 px-3 border-2 border-transparent   focus:border-blue-500 focus:outline outline-white
        "
        onClick={prevSlide}
      >
        <MdOutlineArrowBackIos size={50} />
      </button>
      <button
        className="absolute top-[47%] right-10 transform -translate-y-1/2 h-60 px-3 border-2 border-transparent   focus:border-blue-500 focus:outline outline-white"
        onClick={nextSlide}
      >
        <MdOutlineArrowForwardIos size={50} />
      </button>
      <div className="h-14 w-full absolute top-[175%] left-0 backdrop-blur-lg bg-slate-50/10"></div>
    </div>
  );
};

export default Carousel;
