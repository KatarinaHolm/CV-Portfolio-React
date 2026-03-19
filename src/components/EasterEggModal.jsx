import "./EasterEggModal.css"

export default function EasterEgg({onClose}){
    
    function closeEasterEgg(event){
    onClose();
    event.preventDefault();
    }
    
    return(
        <div className="easteregg-modal">
            <div className="easteregg2-content">
                <h4>Why do Java developers wear glasses?</h4>
                <p>Because they can’t C#.</p>
                <a onClick={closeEasterEgg} href="#" className="easteregg-close">
                ×
                </a>
            </div>
        </div>
    );
}





