import './about.css'

const AboutPage = () => {
  return (
    <div id='about'>
      <h1 id='OverMij'>Over Mij</h1>
      <div>
        <h2>Migration & Data Architect</h2>
        <p>Mijn naam is Philander van Hien. De afgelopen jaren heb ik voor diverse klanten (o.a. De Lijn, AEGON, ASR, BKR, DLL, Fortis Bank Nederland, GGN, Rabobank, Robeco, Deutsche Bahn) gewerkt aan het realiseren van complexe migratie- en implementatieprojecten. Ik stuur (internationale) remote teams aan in o.a. België, Italië, India, Roemenië, het Verenigd Koninkrijk en de Verenigde Staten.
        </p>
        <div>
          <div className='about-info'>
            <h3>Naam:</h3>
            <p>Merijn van Hien</p>
          </div>
          <div className='about-info'>
            <h3>Leeftijd:</h3>
            <p>18</p>
          </div>
          <div className='about-info'>
            <h3>Telefoonnummer:</h3>
            <p>+31 657628203</p>
          </div>
          <div className='about-info'>
            <h3>Email:</h3>
            <p>merijn@vanhien.com</p>
          </div>
        </div>

        <h2>Opleiding & Ervaring</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-number">1</div>
            <h3>Summa College</h3>
            <p>Software Developer</p>
            <p>2023 - Heden</p>
          </div>

          <div className="timeline-item right">
            <div className="timeline-number">2</div>
            <h3>Bounce Valley Eindhoven</h3>
            <p>Teamleider</p>
            <p>2022 - Heden</p>
          </div>

          <div className="timeline-item right">
            <div className="timeline-number">3</div>
            <h3>SpareRib Express</h3>
            <p>Driver</p>
            <p>2024 - Heden</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">4</div>
            <h3>Sint-Joris College</h3>
            <p>Natuur en Techniek</p>
            <p>2018 - 2022</p>
          </div>

          <div className="timeline-item right">
            <div className="timeline-number">5</div>
            <h3>Albert Heijn</h3>
            <p>Allround Medewerker</p>
            <p>2020 - 2022</p>
          </div>
          {/* <div className="timeline-item left">
            <div className="timeline-number">3</div>
            <h3>Stage</h3>
            <p>Software Developer</p>
            <p>2023 - Heden</p>
          </div> */}
        </div>
      </div>

      <h2>Skills</h2>
      <h3>Programmeertalen</h3>
      <div>
        <h3>HTML</h3>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div>
        <h3>CSS</h3>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div>
        <h3>JavaScript</h3>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: '80%' }}></div>
        </div>
      </div>
      <div>
        <h3>PHP</h3>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: '75%' }}></div>
        </div>
      </div>
      <div>
        <h3>Dart</h3>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: '50%' }}></div>
        </div>
      </div>
      <div>
        <h3>TypeScript</h3>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: '10%' }}></div>
        </div>
      </div>
      <h3>FrameWorks</h3>
      <div>
        <h3>Next.js</h3>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: '50%' }}></div>
        </div>
      </div>
      <div>
        <h3>Laravel</h3>
        <div className="skill-bar">
          <div className="skill-bar-fill" style={{ width: '45%' }}></div>
        </div>
      </div>
      <div className="vaardigheden-container">
        <h2>Vaardigheden</h2>
        <div className="vaardigheden-buttons">
          <button>Teamwork</button>
          <button>Communicatie</button>
          <button>Probleemoplossing</button>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;