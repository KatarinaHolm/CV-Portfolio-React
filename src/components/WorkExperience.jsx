import Cv from "../assets/cv.json";

export default function Workexperience() {
  return (   
       <div className="cv-item cv-arbete">
              <h3>Arbetslivserfarenhet</h3>

        {Cv.workplaces.map((workplace, index) => {
          return (
           <div key={index}>
           <div className="flex-card">
                <h4>{workplace.employer}</h4>
                <p className="years">{workplace.years}</p>
              </div>
              <h5>{workplace.title}</h5>
              <ul>
                { workplace.tasks.map((task, index) =>
                    <li key={index}>{task.description}</li>
                )}                
              </ul>
           </div>
          )
        })}
       </div>    
  )
}
