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
          <GitHub />
        </section>
      </main>
    </>
  );
}
