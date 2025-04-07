import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Kevin J. Pilcher's E-Portfolio</h1>
      <p className="home-subtitle">Disciplined. Accountable. Committed to people.</p>

      <section>
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
          I’m a U.S. Air Force E6 with 11 years of service, committed to leading with integrity,
          upholding standards, and developing others. I’ve led in operational, strategic, and instructional roles—
          mentoring Airmen and building high-performance teams. Outside of uniform, I'm a family man who values
          loyalty, growth, and balance.
        </p>
      </section>

      <section>
        <div className="offset-image-wrapper">
          <img src="/family1.jpg" alt="Pilcher Family" className="offset-image family" />
          <img src="/military1.jpg" alt="Military Service" className="offset-image military" />
        </div>
      </section>
    </div>
  );
}
