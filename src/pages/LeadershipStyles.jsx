import React, { useState } from "react";

export default function LeadershipStyles() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = Array.from({ length: 16 }, (_, i) => `/LeadershipStyles/Slide${i + 1}.JPG`);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="content">
      <h2>Leadership Styles and When to Use Them</h2>
      <p>
        This visual presentation explores six key leadership styles—Coercive, Authoritative, 
        Affiliative, Democratic, Pace-Setting, and Coaching—with real-world military examples.
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
      
      <a
        href="/LeadershipStyles.pptx"
        download
        className="press-button"
      >
        Download Slide Deck (PPTX)
      </a>

    </div>
  );
}
