import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Cv from "./pages/Cv.jsx";
import GitHub from "./components/GitHubPortfolio.jsx";
import { useEffect } from "react";

function closeEasterEgg(){
    const easterEggClose = document.querySelector(".easteregg-close");
    easterEggModal.classList.remove("easteregg2-show");
}

easterEggClose.addEventListener("click", closeEasterEgg);

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", findEgg);
  }, []);
  let index = 0;

  function findEgg(event){
  
  const secretWord = ".net";
    if(secretWord[index] === event.key){
        
        index++;

        if(index === secretWord.length){
                        
            setShowModal(true);
        
            index = 0;
        }
    }

    else{
        index = 0;
    }     
};
  



  return (
    <>
     {/* <Home /> */}
     {/* <About /> */}
     {/* <Portfolio /> */}
     {/* <Cv /> */}
     <GitHub />
    
    </>
  )
}

export default App






