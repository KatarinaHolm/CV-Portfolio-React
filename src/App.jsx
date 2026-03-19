import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Cv from "./pages/Cv.jsx";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar.jsx";
import EasterEgg from "./components/EasterEggModal.jsx";
import { useState, useEffect, useRef } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";


function App() {
  const [showModal, setShowModal] = useState(false);

  const sequenceIndex = useRef(0);
  const secretWord = ".net";

  function findEgg(event) {
    if (secretWord[sequenceIndex.current] === event.key) {
      sequenceIndex.current++;

      if (sequenceIndex.current === secretWord.length) {
        setShowModal(true);
        sequenceIndex.current = 0;
      }
    } else {
      sequenceIndex.current = 0;
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", findEgg);

    return () => {
      window.removeEventListener("keydown", findEgg);
    };
  }, []);

  function onClose() {
    setShowModal(false);
  }

  return (
    <>
      <HashRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
        {showModal && <EasterEgg onClose={onClose} />}    
        <Footer />
      </HashRouter>
      
    </>
  );
}

export default App;
