import { useState, useEffect } from "react";

export default function GitHubPortfolio() {
  const [repos, setRepos] = useState([]);

  async function GetRepos() {
    const response = await fetch(
      "https://api.github.com/users/KatarinaHolm/repos",
    );
    const data = await response.json();
    
    setRepos(data);
  }

  useEffect(() => {
    GetRepos();
  }, []);

  return (
    <>
      <section>
        <h2>GitHub-portfolio</h2>
        <div className="grid-portfolio">
          {repos.map((repo) => {
            return (
              <div className="card">
                {/* <img
                className="project-image"
                src="/TheTeamGenerator.webp"
                alt="bild av meny i konsolapp The Team Generator"
                /> */}
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


