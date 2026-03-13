import EasterEgg from "../components/EasterEggModal";
import Footer from "../components/Footer";
import "./Cv.css";

export default function Cv() {
  return (
    <>
      <main>
        <div id="cv" className="container">
          <h2>CV</h2>
          <div className="cv">
            <div className="cv-item cv-kontakt">
              <h3>Kontakt</h3>
              <div className="contact-flex-items">
                <img
                  className="cv-icon"
                  src="images/icons/envelope-at-fill.svg"
                  alt="mail icon"
                />
                <a href="mailto:katarinaholm89@gmail.com">
                  katarinaholm89@gmail.com
                </a>
              </div>
              <div className="contact-flex-items">
                <img
                  className="cv-icon map"
                  src="images/icons/geo-alt-fill.svg"
                  alt="map needle icon"
                />
                <p>Stockholm, Sverige</p>
              </div>
              <div className="contact-flex-items">
                <img
                  className="cv-icon gitHub"
                  src="images/icons/GitHub_Invertocat_Black_Clearspace.svg"
                  alt="github icon"
                />
                <a className="a-print" href="https://github.com/KatarinaHolm">
                  GitHub
                </a>
              </div>
              <div className="contact-flex-items">
                <img
                  className="cv-icon"
                  src="images/icons/linkedin-svgrepo-com.svg"
                  alt="linkedin icon"
                />
                <a
                  className="a-print"
                  href="https://linkedin.com/in/katarina-holm-14aa4a325"
                >
                  Linkedin
                </a>
              </div>
            </div>
            <div className="cv-item cv-profil">
              <h3>Professionell profil</h3>
              <p>
                Fullstackutvecklare .NET med bakgrund som logoped inom hälsovård
                och forskning. Förfinade färdigheter i problemlösning,
                analytiskt tänkande, samarbete och helhetsförståelse. Studerar
                vid Chas Academy och söker LIA/praktik för att utveckla tekniska
                färdigheter i verkliga projekt.
              </p>
            </div>
            {/* Utbildning */}
            
            <div className="cv-item cv-arbete">
              <h3>Arbetslivserfarenhet</h3>
              <div className="flex-card">
                <h4>Region Stockholm</h4>
                <p className="years">2018 Aug - pågående</p>
              </div>
              <h5>Logoped / handledare</h5>
              <ul>
                <li>
                  Handledde föräldrar i färdighetsträning för barn med autism
                  och/eller intellektuell funktionsnedsättning
                </li>
                <li>
                  Ledde kurser och nätverksträffar för föräldrar och närstående
                </li>
                <li>Samarbete och kommunikation med tvärprofessionella team</li>
              </ul>
              <div className="flex-card">
                <h4>Karolinska Institutet</h4>
                <p className="years">2016 Aug – 2018 Juni</p>
              </div>
              <h5>Forsknings- och projektassistent</h5>
              <ul>
                <li>Rekryterade deltagare och genomförde inspelningar</li>
                <li>Bearbetade och analyserade insamlat material</li>
                <li>Administrativa och organisatoriska uppgifter/li&gt;</li>
              </ul>
              <div className="flex-card">
                <h4>Röstkonsulten AB</h4>
                <p className="years">2013 Aug – 2016 Aug</p>
              </div>
              <h5>Logoped</h5>
              <ul>
                <li>
                  Bedömning och intervention av barn med tal- och språkstörning
                  samt vuxna med röststörning
                </li>
                <li>
                  Dokumentation och journalföring enligt evidensbaserat
                  arbetssätt
                </li>
              </ul>
            </div>
            <div className="cv-item cv-teknik">
              <h3>Tekniska färdigheter</h3>
              <ul>
                <li>C# (.NET 10)</li>
                <li>ASP.NET Core</li>
                <li> JavaScript &amp; React</li>
                <li>Entity Framework, SQL &amp; databaser</li>
                <li>REST API-utveckling</li>
                <li>Azure &amp; molntjänster</li>
                <li>Git &amp; versionshantering</li>
                <li>Agil metodik (Scrum)</li>
              </ul>
            </div>
            <div className="cv-item cv-kurser">
              <h3>Kurser</h3>
              <div className="flex-card">
                <h4>Motiverande samtal (MI), 3 dagar</h4>
                <p className="years">2022 Mar - Apr</p>
              </div>
              <p className="last-element">Region Stockholm</p>
              <div className="flex-card">
                <h4>
                  Dokumentation, bearbetning och analys av språklig data, 7,5 hp
                </h4>
                <p className="years">2016 November</p>
              </div>
              <p className="last-element">Karolinska Institutet</p>
            </div>
            <div className="cv-item cv-språk last-element">
              <h3>Språk</h3>
              <ul>
                <li>Svenska: Modersmål</li>
                <li>Engelska: Professionell yrkeskunskap</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Easter egg */}
        <EasterEgg />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
}
