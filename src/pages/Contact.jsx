import React from "react";

export default function Contact() {
  return (
    <div className="content">
      <h2>My Resume</h2>
      <p>
        Below is a visual copy of my professional resume. You can also download the full PDF version at the bottom.
      </p>

      <div className="resume-images">
        <img src="/resume1.jpeg" alt="Resume Page 1" />
        <img src="/resume2.jpeg" alt="Resume Page 2" />
      </div>

      <a href="/KevinPilcherResume.pdf" download className="press-button">
        Download Full Resume (PDF)
      </a>

    </div>
  );
}
