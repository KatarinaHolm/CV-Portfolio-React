import "./Portfolio.css";
import "../components/Modal.css";
import GitHub from "../components/GitHubPortfolio";

// Obs! Ladda upp från GitHub

export default function Portfolio() {
  return (
    <>
      <main>
        <section id="portfolio" className="container">
          <h2>Portfolio</h2>
          <div className="grid-portfolio">
            {/* The Team Generator */}
            <div className="card">
              <img
                className="project-image"
                src="/TheTeamGenerator.webp"
                alt="bild av meny i konsolapp The Team Generator"
              />
              <h3>The Team Generator</h3>
              <h4>C#/.NET</h4>
              <a className="btn" href="#popup1">
                Om projektet
              </a>
            </div>
            <div id="popup1" className="modal">
              <div className="modal-content">
                <a href="#" className="modal-close">
                  ×
                </a>
                <img
                  className="project-image"
                  src="/TheTeamGenerator.webp"
                  alt="bild av meny i konsolapp The Team Generator"
                />
                <div className="modal-text">
                  <h3>The Team Generator</h3>
                  <p>
                    Idén till appen växte fram när vår lärare bad oss komma på
                    kreativa sätt att dela upp klassen i grupper under våra
                    workshops. Vi hade nyligen börjat arbeta med
                    objektorienterad programmering, och projektet blev ett
                    perfekt tillfälle att öva på att skapa klasser och
                    strukturera ett program i flera moduler.
                  </p>
                  <p>
                    Resultatet blev en konsolapplikation i C# med funktioner för
                    att lägga till och ta bort personer från klasslistan, välja
                    hur många personer varje grupp ska bestå av samt
                    slumpmässigt fördela deltagarna i olika grupper.
                  </p>
                </div>
              </div>
            </div>
            {/* Klipp and Style Salong */}
            <div className="card">
              <img
                className="project-image"
                src="/Klipp & Style Salong.webp"
                alt="bild på kod för endpoint"
              />
              <h3>Klipp &amp; Style Salong</h3>
              <h4>C#/.NET, ASP.NET &amp; EF Core</h4>
              <a className="btn" href="#popup2">
                Om projektet
              </a>
            </div>
            <div id="popup2" className="modal">
              <div className="modal-content">
                <a href="#" className="modal-close">
                  ×
                </a>
                <img
                  className="project-image"
                  src="/Klipp & Style Salong.webp"
                  alt="bild på kod för endpoint"
                />
                <div className="modal-text">
                  <h3>Klipp &amp; Style Salong</h3>
                  <p>
                    Det här projektet gjorde jag för att få en bättre förståelse
                    för hur man bygger upp ett API från grunden med Code First i
                    Entity Framework Core och Minimal API i .NET. Modellen
                    Booking skapades i koden och jag lät sedan Entity Framework
                    generera databasen med hjälp av migrationer.
                  </p>
                  <p>
                    API:et är byggt som ett Minimal API med validering av
                    inkommande data. Jag använder en DTO för att kontrollera
                    vilken information som skickas till klienten, vilket gav mig
                    en bättre förståelse för hur man separerar interna modeller
                    från det som exponeras utåt.
                  </p>
                  <p>
                    I DbContext har jag lagt in seed-data för att snabbt kunna
                    testa funktionaliteten. För att testa API:et har jag
                    integrerat Scalar, vilket gjorde det enkelt att arbeta
                    strukturerat med mina endpoints.
                  </p>
                </div>
              </div>
            </div>
            {/* CIBA */}
            <div className="card">
              <img
                className="project-image"
                src="/CIBA.webp"
                alt="bild av meny i konsolapp CIBA"
              />
              <h3>C# Investeringsbank AB</h3>
              <h4>C#/.NET</h4>
              <a className="btn" href="#popup3">
                Om projektet
              </a>
            </div>
            <div id="popup3" className="modal">
              <div className="modal-content">
                <a href="#" className="modal-close">
                  ×
                </a>
                <img
                  className="project-image"
                  src="/CIBA.webp"
                  alt="bild av meny i konsolapp CIBA"
                />
                <div className="modal-text">
                  <h3>C# Investeringsbank AB</h3>
                  <p>
                    För att utveckla våra kunskaper i att bygga mer komplexa
                    program genomförde vi ett grupparbete där vi skapade en
                    bankapp i C#. I projektet ansvarade jag för att utforma
                    strukturen för användar-klasserna samt utveckla
                    inloggningsfunktionen.
                  </p>
                  <p>
                    Jag implementerade även klassen TransactionManager, som
                    säkerställde att överföringar mellan konton endast kunde
                    genomföras var 15:e minut. Det innebar att jag behövde tänka
                    igenom både logik och struktur för att skapa en stabil och
                    tydlig lösning.
                  </p>
                  <p>
                    Projektet gav mig värdefull erfarenhet av att integrera
                    flera olika delar till ett fungerande system, samarbeta
                    effektivt i grupp och ta ansvar för en central del av
                    applikationen. Samtidigt utmanade det mig att kliva utanför
                    min comfort zone och utvecklas tekniskt.
                  </p>
                </div>
              </div>
            </div>
            {/* Raceboden */}
            <div className="card">
              <img
                className="project-image"
                src="/Raceboden.webp"
                alt="bild av landningssida för Raceboden"
              />
              <h3>Raceboden</h3>
              <h4>HTML &amp; CSS</h4>
              <a className="btn" href="#popup4">
                Om projektet
              </a>
            </div>
            <div id="popup4" className="modal">
              <div className="modal-content">
                <a href="#" className="modal-close">
                  ×
                </a>
                <img
                  className="project-image"
                  src="/Raceboden.webp"
                  alt="bild av landningssida för Raceboden"
                />
                <div className="modal-text">
                  <h3>Raceboden</h3>
                  <p>
                    En bekant till mig driver ett företag som hyr ut
                    racingsimulatorer till både event och privatpersoner via
                    tidsbokning. När jag läste Webbutveckling 1 på Komvux såg
                    jag det som ett perfekt tillfälle att skapa en hemsida till
                    ett verkligt företag.
                  </p>
                  <p>
                    Jag genomförde en analys av målgruppen och funderade över
                    vilken känsla hemsidan skulle förmedla. Eftersom
                    verksamheten kretsar kring racing och fart valde jag färger
                    och typsnitt som associerar till sport, bilar och energi.
                    Designen skulle ge ett modernt intryck, samtidigt som den är
                    tydlig och lätt att navigera.
                  </p>
                  <p>
                    En viktig del av kursen handlade om tillgänglighet, vilket
                    jag har tagit stor hänsyn till i arbetet. Texten är
                    tillräckligt stor, typsnittet är lättläst och
                    färgkontrasterna är anpassade för att göra innehållet
                    tydligt för alla användare.
                  </p>
                </div>
              </div>
            </div>
            {/* Hänga gubbe */}
            <div className="card">
              <img
                className="project-image"
                src="/Hangman.webp"
                alt="bild av spel Hänga gubbe i konsolapp"
              />
              <h3>Hänga gubbe</h3>
              <h4>C#/.NET</h4>
              <a className="btn" href="#popup5">
                Om projektet
              </a>
            </div>
            <div id="popup5" className="modal">
              <div className="modal-content">
                <a href="#" className="modal-close">
                  ×
                </a>
                <img
                  className="project-image"
                  src="/Hangman.webp"
                  alt="bild av spel Hänga gubbe i konsolapp"
                />
                <div className="modal-text">
                  <h3>Hänga gubbe</h3>
                  <p>
                    Som en del av utbildningen fick vi i uppgift att bygga ett
                    spel med hjälp av AI. Jag använde verktyget främst som ett
                    stöd i planeringen, till exempel för att fundera över hur
                    programmet kunde delas upp i klasser och vilka metoder som
                    behövdes. Själva koden ville jag däremot skriva på egen
                    hand. För mig är det viktigt att verkligen förstå grunderna
                    i programmering och inte bara få fram ett fungerande
                    resultat.
                  </p>
                  <p>
                    När jag körde fast bad jag om vägledning i stället för
                    färdiga lösningar. På så sätt fick jag hjälp att tänka
                    vidare själv, utan att tappa kontrollen över processen. Jag
                    tror att AI lätt kan bli en fälla för nybörjare, eftersom
                    det är frestande att låta den skriva koden utan att riktigt
                    förstå hur allt hänger ihop.
                  </p>
                  <p>
                    En detalj i spelet som jag är extra nöjd med är att figuren
                    är olika beroende på om spelaren vinner eller förlorar. Den
                    delen valde jag att skapa helt utan AI:s inblandning.
                  </p>
                </div>
              </div>
            </div>
            {/* Databassystem för gymnasieskola */}
            <div className="card">
              <img
                className="project-image"
                src="/Gymnasieskola.webp"
                alt="bild av meny i konsolapp för Gymnasieskola"
              />
              <h3>Databassystem för gymnasium</h3>
              <h4>C#/.NET, SQL &amp; EF Core</h4>
              <a className="btn" href="#popup6">
                Om projektet
              </a>
            </div>
            <div id="popup6" className="modal">
              <div className="modal-content">
                <a href="#" className="modal-close">
                  ×
                </a>
                <img
                  className="project-image"
                  src="/Gymnasieskola.webp"
                  alt="bild av meny i konsolapp för Gymnasieskola"
                />
                <div className="modal-text">
                  <h3>Databassystem för gymnasium</h3>
                  <p>
                    Det sägs ofta att man i modern .NET-utveckling sällan
                    behöver skriva egen SQL, eftersom databaser numera
                    vanligtvis skapas med Code First. Samtidigt är det
                    värdefullt att förstå hur databaser är uppbyggda och hur SQL
                    faktiskt fungerar i praktiken. Det här projektet är därför
                    skapat med Database First.{" "}
                  </p>
                  <p>
                    Jag skapade databasen manuellt genom att skriva SQL-kod för
                    att definiera tabeller och relationer, och övade samtidigt
                    på att göra mer avancerade queries med joins. Det gav mig en
                    djupare förståelse för hur data hänger ihop bakom
                    kulisserna.
                  </p>
                  <p>
                    Med hjälp av scaffolding i Entity Framework genererade jag
                    sedan modellerna till konsolapplikationen. I själva
                    applikationen implementerade jag flera metoder för att
                    filtrera, söka och presentera information utifrån
                    användarens behov.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <GitHub />
      </main>
    </>
  );
}
