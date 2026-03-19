import { useState, useEffect } from "react";

// OBS! lägg till meddelande om laddar innehåll!
export default function GitHubPortfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  async function GetRepos() {
    const response = await fetch(
      "https://api.github.com/users/KatarinaHolm/repos",
    );
    const data = await response.json();

    setRepos(data);
    setLoading(false);
  }

  useEffect(() => {
    GetRepos();
  }, []);

  if (loading) {
    return (
      <>
        <h2>GitHub-portfolio</h2>
        <p>Laddar innehåll, var god vänta...</p>
      </>
    );
  }


  return (
    <>
      <section className="container">
        <h2>GitHub-portfolio</h2>
        <div className="grid-portfolio">
          {repos.map((repo) => {
            return (
              <div className="card">
                <img
                  className="project-image"
                  src="/Klipp & Style Salong.webp"
                  alt="bild"
                />
                <h3>{repo.name}</h3>
                <h4>{repo.description}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
