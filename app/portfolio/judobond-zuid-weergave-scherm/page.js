"use client";
import React, { useState } from 'react';
import '../portfolio.css';

const Project = () => {
    const languages = [
        { name: 'HTML', percentage: 53.2 },
        { name: 'JS', percentage: 34.5 },
        { name: 'CSS', percentage: 12.3 },
    ];

    // const collageImages = [
    //     { src: '/images/Labmex/afbeelding1.png', alt: 'Project Labmex' },
    //     { src: '/images/Labmex/afbeelding2.png', alt: 'Project Labmex' },
    //     { src: '/images/Labmex/afbeelding3.png', alt: 'Project Labmex' },
    //     { src: '/images/Labmex/afbeelding4.png', alt: 'Project Labmex' },
    //     { src: '/images/Labmex/afbeelding5.png', alt: 'Project Labmex' },

    // ];

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
                <h1>Weergave scherm</h1>
                <img src="/images/JudoBond-Zuid.jpg" alt="Labmex Logo" className="project-logo" />
                <p>
                    Dit project is ontwikkeld voor Judo Bond Zuid Nederland. Het is een applicatie die data uit ToernooiPlanner analyseert en omzet naar een webserver. Hiermee kunnen judoka’s eenvoudig bekijken op welke mat en op welk tijdstip zij hun wedstrijden hebben.
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
