import React from "react";

export default function MotivationSWOT() {
  return (
    <div className="content">
      <h2>Enhancing Motivation in the U.S. Air Force (SWOT)</h2>
      <p>
      As a follow-up to my motivation strategy, this paper takes a hard look at the real-world risks of trying to implement change in a complex system like the Air Force. I identified three major challenges—cultural differences, resistance from middle management, and inflexible procedures—and outlined practical ways to address each one. This artifact represents the kind of leader I strive to be: one who doesn’t just dream up ideas but thinks through the roadblocks and builds plans to overcome them. I know change isn’t easy, especially in institutions with deep traditions, but I believe it’s possible with the right mindset and leadership.
      </p>

      <div className="swot-block">
        <a
          href="/MotivationSWOT.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="press-button"
        >
          View Full Paper
        </a>

        <img
          src="/SWOT.jpg"
          alt="Motivation SWOT Graphic"
          className="swot-image"
        />
      </div>
    </div>
  );
}
