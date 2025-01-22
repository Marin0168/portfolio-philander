"use client";
import React, { useState } from 'react';
import '../portfolio.css';

const Project = () => {
  const languages = [
    { name: 'PHP', percentage: 96.3 },
    { name: 'JS', percentage: 1.7 },
    { name: 'CSS', percentage: 1.2 },
    { name: 'HTML', percentage: 0.8 },
  ];

  const collageImages = [
    { src: '/images/labmex/afbeelding1.png', alt: 'Project 1' },
    { src: '/images/labmex/afbeelding2.png', alt: 'Project 1' },
    { src: '/images/labmex/afbeelding3.png', alt: 'Project 1' },
    { src: '/images/labmex/afbeelding4.png', alt: 'Project 1' },
    { src: '/images/labmex/afbeelding5.png', alt: 'Project 1' },

  ];

  const [lightbox, setLightbox] = useState({ isOpen: false, imgSrc: '' });

  const openLightbox = (imgSrc) => {
    setLightbox({ isOpen: true, imgSrc });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imgSrc: '' });
  };

  return (
    <div className="project-container">
      <div className="project-details">
        <h1>Inschrijf buitenlandse Judoka's</h1>
        <img src="/images/JudoBond-Zuid.jpg" alt="Labmex Logo" className="project-logo" />
        <p>
        Dit project is ontwikkeld voor Judo Bond Zuid Nederland. Het betreft een website waarmee buitenlandse judoka’s zich eenvoudig kunnen inschrijven voor het Matsuru Dutch Open Espoir Judo-toernooi.

In het afgelopen jaar hebben maar liefst 870 judoka’s uit 19 verschillende landen zich via deze website geregistreerd, wat bijdraagt aan de internationale uitstraling en toegankelijkheid van het evenement.
        </p>
      </div>

      <div className="skills-section">
        <h2>Gebruikte Programmeertalen</h2>
        <div className="skills-bars">
          {languages.map((lang) => (
            <div key={lang.name} className="skill">
              <span className="skill-name">{lang.name}</span>
              <div className="skill-bar">
                <div
                  className="skill-percentage"
                  style={{ width: `${lang.percentage}%` }}
                />
              </div>
              <span className="skill-percentage-text">{lang.percentage}%</span>
            </div>
          ))}
        </div>
      </div>
{/* 
      <div className="collage-section">
        <h2>Project Collage</h2>
        <div className="collage">
          {collageImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="collage-image"
              onClick={() => openLightbox(image.src)}
            />
          ))}
        </div>
      </div> */}

      {lightbox.isOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightbox.imgSrc} alt="Vergrote afbeelding" className="lightbox-image" />
        </div>
      )}
    </div>
  );
};

export default Project;
