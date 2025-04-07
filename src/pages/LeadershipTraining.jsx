import React, { useState } from "react";

export default function LeadershipTraining() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = Array.from({ length: 13 }, (_, i) => `/LeadershipTraining/Slide${i + 1}.JPG`);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="content">
      <h2>Leadership Training for NCOs in the U.S. Air Force</h2>
      <p>
        This presentation outlines key leadership theories including Trait, Skills, Behavioral, 
        Situational, and Path-Goal. It’s tailored to help Non-Commissioned Officers lead and 
        mentor within the Air Force environment.
      </p>

      <div className="slide-carousel">
        <img
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="slide-image"
        />
        <div className="carousel-controls">
          <button onClick={prevSlide}>&larr; Previous</button>
          <span>
            {currentSlide + 1} / {slides.length}
          </span>
          <button onClick={nextSlide}>Next &rarr;</button>
        </div>
      </div>
    </div>
  );
}
