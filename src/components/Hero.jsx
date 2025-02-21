import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { videosList } from "../data/Hero";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next video
  const nextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === videosList.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to move to the previous video
  const prevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videosList.length - 1 : prevIndex - 1
    );
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextVideo, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video Slider */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {videosList.map(({ id, vid }, index) => (
          <video
            key={id}
            src={vid}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            autoPlay
            loop
            muted
            playsInline
          />
        ))}
      </div>

      {/* Foreground Text and Button */}
      <div className="absolute top-32 2xl:top-48 xl:top-44 lg:top-44 w-full lg:w-3/4 h-full flex items-center text-center lg:text-start z-0 px-20">
        <div className="text-white w-full pb-4 text-center lg:text-start">
          <h1 className="lg:text-2xl xl:text-3xl text-xl font-bold mb-4">
            {videosList[currentIndex].title}
          </h1>
          <p className="text-xs md:text-base text-light-primary mb-7 leading-[1.5]">
            {videosList[currentIndex].description}
          </p>
          <Link to={`/Description/${videosList[currentIndex].id}`}>
            <button className="group relative py-1 md:py-2 px-6 md:px-8 rounded-full z-0 bg-white font-medium w-44 mx-auto mb-7">
              <div className="circle absolute w-1/4 h-full bg-light-tertiary rounded-full right-0 z-20 top-0 group-hover:w-full duration-200">
                <FaChevronRight className="absolute text-primary-color top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 duration-75 group-hover:opacity-0" />
              </div>
              <div className="text-light-tertiary text-base relative z-20 transition-all group-hover:text-white">
                {videosList[currentIndex].btn}
              </div>
            </button>
          </Link>
        </div>
      </div>

      {/* Left and Right Navigation Buttons */}
      <div className="hidden lg:block absolute top-1/2 left-20 transform -translate-y-1/2 z-20">
        <button
          onClick={prevVideo}
          className="xl:p-3 p-2 xl:text-xl rounded-full bg-light-primary text-light-secondary bg-opacity-50 dark:bg-dark-primary dark:text-dark-secondary dark:bg-opacity-50"
        >
          <FaChevronLeft />
        </button>
      </div>
      <div className="hidden lg:block absolute top-1/2 right-20 transform -translate-y-1/2 z-20">
        <button
          onClick={nextVideo}
          className="xl:p-3 p-2 xl:text-xl rounded-full bg-light-primary text-light-secondary bg-opacity-50 dark:bg-dark-primary dark:text-dark-secondary dark:bg-opacity-50"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Hero;
