import React from "react";

export default function Motivation() {
  return (
    <div className="content">
      <h2>Enhancing Motivation in the U.S. Air Force</h2>
      <p>
      In this paper, I address a challenge I’ve seen firsthand: how motivation—or the lack of it—impacts morale and performance in the Air Force. I applied a combination of motivation theories, including Maslow’s Hierarchy, ERG, Two-Factor, Expectancy, and Reinforcement, to design a strategy that puts people first. I emphasized simple but powerful changes like recognizing achievement, communicating clearly, and prioritizing family support. This paper showcases my ability to diagnose root issues, connect theory to action, and push for cultural shifts that support both the mission and the individuals behind it. This is leadership through empathy and structure and though.
      </p>

      <div className="motivation-block">
        <a
          href="/Motivation.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="press-button"
        >
          View Full Paper
        </a>

        <img
          src="/Motivation.jpg"
          alt="Enhancing Motivation Cover"
          className="motivation-image"
        />
      </div>

    </div>
  );
}
