import "./Modal.css"
import "./EastereggModal.css"

export default function EasterEgg(){
    

    //JS code here
    
    return(
        <div className="modal easteregg2">
            <div className="easteregg2-content">
                <h4>Why do Java developers wear glasses?</h4>
                <p>Because they can’t C#.</p>
                <a href="#" className="modal-close easteregg-close">
                ×
                </a>
            </div>
        </div>
    );
}

// Easter egg 2

index = 0;
const secretWord = ".net";
const easterEggModal = document.querySelector(".easteregg2")

function findEgg(event){
   
    if(secretWord[index] === event.key){
        
        index++;

        if(index === secretWord.length){
                        
            easterEggModal.classList.toggle("easteregg2-show");
        
            index = 0;
        }
    }

    else{
        index = 0;
    }     
}

// window.addEventListener("keydown", findEgg);


//close Easter egg popup

