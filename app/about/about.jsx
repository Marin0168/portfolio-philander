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
            <p>Philander van Hien</p>
          </div>
          <div className='about-info'>
            <h3>Adres:</h3>
            <p>Nieuwstraat 81, Tilburg (NL)
            </p>
          </div>
          <div className='about-info'>
            <h3>Mobiel:</h3>
            <p>+31 (0)6-19908999</p>
          </div>
          <div className='about-info'>
            <h3>Geboortedatum:</h3>
            <p>24 oktober 1981</p>
          </div>
          <div className='about-info'>
            <h3>Nationaliteit:</h3>
            <p>Nederlands</p>
          </div>
          <div className='about-info'>
            <h3>Burgerlijke staat:</h3>
            <p>Gehuwd</p>
          </div>
          <div className='about-info'>
            <h3>Email:</h3>
            <p>philander@vanhien.com</p>
          </div>
        </div>
        <div>
          <h2>Zakelijk Porfiel:</h2>
          <p>Analytisch, flexibel, professioneel, vanuit businessperspectief denken in automatiseringsoplossingen, helikopterview, teamspeler.
            Persoonlijk profiel: Rustig, gestructureerd, leergierig, ambitieus, discreet, doorzetter.
          </p>
        </div>

        <h2>Opleiding & Ervaring</h2>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-number">1</div>
            <h3>Data Science for Business Managers level 2 – Post-Master JADS (Tilburg University & TU/e)</h3>
            <p>Verwachte afronding eind 2025</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">2</div>
            <h3>Data Science for Experts Foundations – Post-Master JADS (Tilburg University & TU/e)</h3>
            <p>Verwachte afronding eind 2023</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">3</div>
            <h3>IPMA C</h3>
            <p>Alleen training, 2015</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">4</div>
            <h3>MSc in Controlling</h3>
            <p>Niet afgerond, Nyenrode, 2010</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">5</div>
            <h3>PRINCE2 Registered Practitioner & Foundation – APMG</h3>
            <p>2008</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">6</div>
            <h3>WO Bedrijfseconomie – Tilburg University</h3>
            <p>2005</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">7</div>
            <h3>VWO</h3>
            <p>Diploma behaald, 1999</p>
          </div>

          <div className="timeline-item right">
            <div className="timeline-number">8</div>
            <h3>Tilburg University</h3>
            <p>Big Data, AI & Law Program (2022)</p>
            <p>Masterclass Data Quality & Governance (2019)</p>
            <p>Masterclass Artificial Intelligence (2018)</p>
          </div>

          <div className="timeline-item right">
            <div className="timeline-number">9</div>
            <h3>Diversen</h3>
            <p>Multiple Remote Working Trainings (2021)</p>
            <p>Multiple Power BI trainingen (2020)</p>
            <p>Control (Diverse cursussen, 2005)</p>
            <p>Omgaan met de klant, conflicten, verandermanagement, projectvoorbereiding, commercieel denken</p>
            <p>IFRS cursus – Deutsche Bahn, Köln (2003)</p>
            <p>IAS/IFRS Training – PwC, Frankfurt (2003)</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">10</div>
            <h3>Werkervaring</h3>
            <p>Migration Factory (12.2017 – heden)</p>
            <ul>
              <li>Master Data Lead & Analytics Translator – De Lijn (04.2022 – heden): Sturen van migratieteam, migratie financiële systemen, testplan & runbook</li>
              <li>Data Migratie Architect – Albert Heijn (01.2022 – 04.2022): Conceptontwerp migratiestraat</li>
              <li>Data Migratie Architect & Runbookmanager – ATBank/FIBR (05.2021 – 12.2021): Migratie financiële systemen</li>
              <li>Lead Migratie Rabobank Leasing (02.2018 – 04.2021): Projectplan, requirementsanalyse, migratiestrategie</li>
              <li>Analytics Translator Rabobank Covid Lease Refinancing (05.2020 – 09.2020): Ontwerp geautomatiseerde betaalpauze</li>
              <li>Analytics Translator Rabobank Leasing (12.2017 – 02.2018): Advies rondom start migratieproject</li>
            </ul>
          </div>

          <div className="timeline-item right">
            <div className="timeline-number">11</div>
            <h3>DLL & Rabobank</h3>
            <p>02.2016 – 03.2018</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">12</div>
            <h3>Robeco</h3>
            <p>06.2015 – 02.2016</p>
            <p>Analytics translator & Lead data migratie, Projectlead Leasing migratie en archivering</p>
            <p>Sturen van migratieteam, migratiestrategie, testplan, runbook</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">13</div>
            <h3>Quion</h3>
            <p>03.2015 – 10.2015</p>
            <p>Projectleider Accounting Migratie & Archivering, Testcoördinator Migratie</p>
            <p>Migratieproces financiële systemen, archivering, controle-framework</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">14</div>
            <h3>GGN</h3>
            <p>02.2014 – 02.2015</p>
            <p>Data Migratie Manager Argenta bank hypotheken</p>
            <p>Realisatie migratiestrategie, plan van aanpak, draaiboek</p>
          </div>

          <div className="timeline-item left">
            <div className="timeline-number">15</div>
            <h3>Diversen</h3>
            <p>Projectleider & Business Consultant data-uitwisseling zorg</p>
            <p>Uniformering & Efficiency Financial Accounting (besparing 12 FTE)</p>
            <p>(Verder ervaring bij BKR, AEGON, Ziggo, ASR, VABO Ontwikkeling, Fortis ASR, Romein Beton, Control, DB Schenker, Rabobank. Meer details op aanvraag.)</p>
          </div>
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