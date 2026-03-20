import { useState, useEffect } from "react";


export default function GitHubPortfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImageUrl = (repo) => {
    return `https://raw.githubusercontent.com/KatarinaHolm/${repo.name}/${repo.default_branch}/assets/preview.webp`;
  };

  async function GetRepos() {
    const response = await fetch(
      "https://api.github.com/users/KatarinaHolm/repos",
    );
    const data = await response.json();
    const filtered = data.filter((repo) => repo.topics?.includes("portfolio"));
    setRepos(filtered);
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
              <div className="card" key={repo.id}>
                <img
                  className="project-image"
                  src={getImageUrl(repo)}
                  alt={repo.name}
                  onError={(event) => {
                    event.target.onerror = null;
                    event.target.src = "/Fallback.webp";
                  }}
                />
                <h3>{repo.name}</h3>
                <h4>{repo.language}</h4> 
                {/* Skriva ut flera språk??? */}
                {/* Länk till GitHub-repo!! */}
                {/* repo.html_url */}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
