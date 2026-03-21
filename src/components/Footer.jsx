import { useEffect, useState } from "react";
import "./Footer.css"
import GitHub from "../assets/icons/GitHub_Invertocat_Black_Clearspace.svg"
import Linkedin from "../assets/icons/linkedin-svgrepo-com.svg"

export default function Footer() {
  const [isEggActive, setIsEggActive] = useState(false);

  function handleClick()
  {
    setIsEggActive(isEggActive => !isEggActive);
  }
  
  useEffect(() => {
    if(isEggActive)
    {
      document.body.classList.add("easter-egg1");
    }
    else{
      document.body.classList.remove("easter-egg1");
    }
   
  }, [isEggActive])



  return (
    <footer onClick={handleClick}>
      <div className="center">
        <a href= "https://github.com/KatarinaHolm">
          <img
            src={GitHub}
            alt="GitHub logo"
            className="logo"
          />
        </a>
        <a href="https://www.linkedin.com/in/katarina-holm-14aa4a325/">
          <img
            src={Linkedin}
            alt="LinkedIn logo"
            className="logo in"
          />
        </a>
      </div>
    </footer>
  );
}

