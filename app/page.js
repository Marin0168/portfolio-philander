"use client";

import React from "react";
import "./homepage.css";
import AboutPage from "./about/about";
import ProjectPage from "./projects/portfolio";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <img src="images/philandervanhien.jpeg" alt="Philander van Hien" className="profile-photo" />
          <div>
            <h1>Welkom op mijn portfolio!</h1>
            <p>
              👋 Hallo en welkom! Mijn naam is <strong>Philander van Hien</strong>.
              Ik ben een ervaren projectleider, business- en requirementsanalist met een specialisatie in (data)migraties, data quality en implementaties. In mijn werk combineer ik graag een scherp analytisch vermogen met pragmatisch projectmanagement.
            </p>
            <p>
              Blader gerust door mijn projecten, opleidingen en vaardigheden.
              Wil je meer weten of samenwerken? Neem dan vooral contact op. Samen realiseren we jouw digitale transformatie! 🚀
            </p>
          </div>
        </div>
      </div>



      {/* Over mij */}
      <section className="about">
        <AboutPage />
      </section>

      {/* Projecten */}
      <section className="projects" id="projects">
        <ProjectPage />
      </section>
      {/* Call-to-Action */}
      <section className="cta-section">
        <h2>Benieuwd naar wat ik voor jou kan betekenen?
          Mail mij of bel me gerust als je meer informatie wilt of wilt samenwerken.
          Samen zorgen we voor een succesvolle (data)migratie of implementatie!
        </h2>
        <a href="mailto:Philander@vanhien.com" className="cta-button">
          Mail mij
        </a>
      </section>

    </div>
  );
};

export default Home;
