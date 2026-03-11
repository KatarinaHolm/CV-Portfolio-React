import EasterEgg from "../components/EasterEggModal";
export default function Home(){

    return(
        <main>
  <div id="short-facts" className="container">
    <h2>I korthet</h2>
    <div className="short-facts">
      <div className="grid-item">
        <ul>
          <li>C#/.NET</li>
          <li>API:er</li>
          <li>Databas</li>
          <li>Frontend</li>
          <li>Teamarbete</li>
        </ul>
      </div>
      <div className="grid-item">
        <p>
          Jag studerar Fullstack .NET på Chas Academy och trivs bäst med
          backendutveckling, särskilt objektorienterad programmering och att
          bygga tydligt strukturerade lösningar.
        </p>
        <p>
          Är noggrann, nyfiken och snabblärd. Med över tio års erfarenhet från
          vården är jag van att ta ansvar, samarbeta och kommunicera.
        </p>
        <p>
          Söker praktik (LIA) mellan 30 nov 2026 och 18 apr 2027 och ser fram
          emot att bidra och fortsätta utvecklas i ett team.
        </p>
      </div>
    </div>
    
    {/* Easter egg */}
    <EasterEgg />
  </div>
</main>
    );
}