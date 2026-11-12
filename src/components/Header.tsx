import { useState } from "react";
import "../styles/Header.css"

function Header(){
    
    const [hora, setHora] = useState(() => new Date().toLocaleTimeString());
    setInterval(() => {
        setHora(new Date().toLocaleTimeString());
        }, 1000);

    return(
        <div className="header">
            <div className="marca">
                <img className= "imagen"src="/imagenMarca.png" alt="imagen"/>
                <h2 className="nombre">LogFit</h2>
            </div>
            <div className="horizontal"></div>
                <p className="hora">{hora}</p>
        </div>
    );
}

export default Header;