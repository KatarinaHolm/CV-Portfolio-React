import "./About.css"
import ProfileImg from "../assets/profilbild_kvadrat.webp"

//OBS! Få bort utrymme under footer på breda skärmar

export default function About() {
  return (
    <>
      <main>
        <div id="about-me" className="container">
          <h2>Om mig</h2>
          <div className="about-me">
            <figure className="grid-item">
              <img
                className="profile-image"
                src={ProfileImg}
                alt="Porträttfoto av Katarina"
              />
            </figure>
            <div className="grid-item">
              <p>
                Jag är en vetgirig och analyserande person som gillar att förstå
                hur saker hänger samman och att hitta smarta lösningar på
                komplexa problem. Efter flera års arbete som logoped inom
                hälsovård och forskning har jag förfinat mina färdigheter i att
                lyssna, samarbeta och se helheten; kvaliteter som jag tar med
                mig in i min nya bana som utvecklare.
              </p>
              <p>
                För närvarande studerar jag till fullstackutvecklare .NET på
                Chas Academy i Stockholm. Genom utbildningen får jag kombinera
                mitt intresse för logiskt tänkande och problemlösning med
                kreativitet och möjligheten att bredda min kompetens.
              </p>
              <p>
                Mitt närmaste mål är att hitta en praktikplats (LIA) mellan den
                30 november 2026 och den 18 april 2027. Jag ser fram emot att
                bidra i ett utvecklingsteam där jag kan växa som utvecklare,
                använda mina nya kunskaper och fördjupa mitt lärande genom
                praktisk tillämpning.
              </p>
              <p>
                Utanför studierna hittar jag energi och balans genom att träna,
                sjunga i kör och läsa böcker. Dessa aktiviteter hjälper mig att
                behålla fokus samt hitta inspiration och kreativitet.
              </p>
            </div>
          </div>
        </div>       
      </main>    
    </>
  );
}
