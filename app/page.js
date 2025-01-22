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
          <img src="/images/Merijnvanhien.jpg" alt="Merijn van Hien" className="profile-photo" />
          <div>
            <h1>Welkom op mijn portfolio!</h1>
            <p>
              👋 Hallo en welkom! Mijn naam is <strong>Merijn van Hien</strong>, een gepassioneerde 
               <strong> softwareontwikkelaar</strong> die graag ideeën tot leven brengt. Hier vind je een overzicht van mijn werk, vaardigheden en ervaringen.
            </p>
            <p>
              Blader door mijn projecten, leer meer over mijn vaardigheden, en aarzel niet om contact met me op te nemen
              als je samen wilt werken. Samen kunnen we iets bijzonders creëren! 🚀
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
        <h2>Benieuwd naar wat ik voor jou kan betekenen?</h2>
        <a href="mailto:merijn@vanhien.com" className="cta-button">
          Mail mij
        </a>
      </section>

    </div>
  );
};

export default Home;
