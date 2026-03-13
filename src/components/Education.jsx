import Cv from "../assets/cv.json";

export default function Education() {
  return (   
      <div className="cv-item cv-utbildning">
        <h3>Utbildning</h3>

        {Cv.educations.map((education, index) => {
          return (
            <div key={index} className="last-element">
              <p className="years">{education.year}</p>
              <h4>{education.school}</h4>
              <ul >
                <li>{education.orientation}</li>
                <li>{education.credits}</li>
              </ul>
            </div>
          )
        })}
       </div>    
  )
}
