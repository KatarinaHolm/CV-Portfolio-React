import "./EastereggModal.css"

export default function EasterEgg({onClose}){
    
    function closeEasterEgg(event){
    onClose();
    event.preventDefault();
    }
    
    return(
        <div className="modal easteregg2">
            <div className="easteregg2-content">
                <h4>Why do Java developers wear glasses?</h4>
                <p>Because they can’t C#.</p>
                <a onClick={closeEasterEgg} href="#" className="modal-close">
                ×
                </a>
            </div>
        </div>
    );
}





