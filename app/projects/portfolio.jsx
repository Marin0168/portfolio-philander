import React from "react";
import "./portfolio.css"; // Zorg ervoor dat portfolio.css in dezelfde map staat of pas het pad aan

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Inschrijf buitenlandse Judoka's",
      description: "Voor Judo Bond Zuid Nederland heb ik een website gemaakt waar buitenlandse jodoka's zich kunnen inschrijven voor Matsuru Dutch Open Espoir Judo tournament.",
      image: "/images/JudoBond-Zuid.jpg",
      link: "./portfolio/judobond-zuid-inschrijf-buitenland",
      button: "Meer info",
    },
    {
      id: 2,
      title: "Weergave scherm",
      description: "Een weergave scherm waar judokas tijdens een toernooi makkelijk kunnen zien wanneer en waar ze moeten judoën.",
      image: "/images/JudoBond-Zuid.jpg",
      link: "./portfolio/judobond-zuid-weergave-scherm",
      button: "Meer info",
    },
    {
      id: 3,
      title: "Labmex",
      description: "Labmex is ontstaan uit de behoefte van een platform waarop je makkelijk HTML, CSS en JavaScript code kunt leren schrijven.",
      image: "/images/LabmexLogo.png",
      link: "./portfolio/labmex",
      button: "Lees meer",
    },
  ];
  return (
    <div>
      <h1 id="portfolio">Portfolio</h1>
      <main>
        <section className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={`${project.title} Thumbnail`} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="button">
                {project.button}
              </a>
            </div>
          ))}
        </section>
      </main>

    </div>
  );
};

export default Portfolio;
