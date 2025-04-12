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
      This training presentation was designed as a development tool for myself and other NCOs in the Air Force. I walk through key leadership theories—Trait, Skills, Behavioral, Situational, and Path-Goal—and explain how each one applies to real challenges we face. I incorporated Air Force doctrine and focused heavily on actionable best practices like cultivating self-awareness, being adaptable, and building trust. This project reflects how I lead every day—by investing in people, thinking critically, and constantly looking for ways to grow and help others do the same. It reinforces my commitment to mentorship, development, and high standards.      
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
