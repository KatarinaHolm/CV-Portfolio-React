import Education from "../components/Education.jsx";
import Experience from "../components/WorkExperience.jsx";
import "./Cv.css";
import GitHub from "../assets/icons/GitHub_Invertocat_Black_Clearspace.svg";
import Linkedin from "../assets/icons/linkedin-svgrepo-com.svg";
import Needle from "../assets/icons/geo-alt-fill.svg";
import Mail from "../assets/icons/envelope-at-fill.svg"

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
                  src={Mail}
                  alt="mail icon"
                />
                <a href="mailto:katarinaholm89@gmail.com">
                  katarinaholm89@gmail.com
                </a>
              </div>
              <div className="contact-flex-items">
                <img
                  className="cv-icon map"
                  src={Needle}
                  alt="map needle icon"
                />
                <p>Stockholm, Sverige</p>
              </div>
              <div className="contact-flex-items">
                <img
                  className="cv-icon gitHub"
                  src={GitHub}
                  alt="github icon"
                />
                <a className="a-print" href="https://github.com/KatarinaHolm">
                  GitHub
                </a>
              </div>
              <div className="contact-flex-items">
                <img
                  className="cv-icon"
                  src={Linkedin}
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
            <Education />

           {/* Arbete */}
           <Experience />

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
      </main>     
    </>
  );
}
