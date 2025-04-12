import React from "react";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Kevin J. Pilcher's E-Portfolio</h1>
      <p className="home-subtitle">Disciplined. Accountable. Committed to people.</p>

      <section>
        <h2 className="section-title">About Me</h2>
        <p className="about-text">
        I’m Kevin J. Pilcher—a Non-Commissioned Officer in the United States Air Force with over a decade of service, a graduating senior earning my Bachelor of Arts in Management with a concentration in Leadership from American Military University, and most importantly, a husband and father to three beautiful young children. Everything I do is ultimately for them. My leadership journey has been shaped by the high standards of military service, a relentless drive for personal growth, and a firm belief that people—not just systems—are the key to mission success.

        Throughout my career, I've led teams in high-pressure environments, enforced standards others might overlook, and mentored peers through complex challenges. My leadership philosophy is built around discipline, accountability, and self-improvement. I believe that structure enables innovation, that the small things matter, and that a leader’s first responsibility is to their people—both in their development and in their well-being.

        What sets me apart is a principled mindset rooted in objective truth and unflinching integrity. I approach every challenge with a clear moral compass, ensuring that my actions align with both mission success and ethical standards—while course-correcting quickly when I fall short, as we all do at times. Whether guiding junior Airmen, facilitating team cohesion, or analyzing strategic organizational behavior, I remain focused on what matters most: integrity, accountability, and continuous improvement.

        This e-portfolio showcases not only my academic achievements and applied leadership skills, but also the mindset I bring to every role I take on—one that values growth, excellence, and service beyond self.
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
