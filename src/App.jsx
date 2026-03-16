import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Cv from "./pages/Cv.jsx";
import GitHub from "./components/GitHubPortfolio.jsx";
import EasterEgg from "./components/EasterEggModal.jsx";
import {useState, useEffect, useRef } from "react";





function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", findEgg);

    return () => {
      window.removeEventListener("keydown", findEgg);

    }
  }, []);
 
  const sequenceIndex = useRef(0);
  const secretWord = ".net";

  function findEgg(event){
   
    if(secretWord[sequenceIndex.current] === event.key){
        
        sequenceIndex.current++;

        if(sequenceIndex.current === secretWord.length){
                        
          setShowModal(true);        
           sequenceIndex.current = 0;
        }
    }
    else{
        sequenceIndex.current = 0;
    }     
}

  function onClose(){
    setShowModal(false);
  };

  return (
    <>
     {/* <Home /> */}
     {/* <About /> */}
     {/* <Portfolio /> */}
     {/* <Cv /> */}
     <GitHub />
    {showModal && <EasterEgg onClose={onClose} />}
    </>
  )
}

export default App






