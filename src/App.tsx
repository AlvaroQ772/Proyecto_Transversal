import { useState } from "react";
import Header from "./components/Header";
import Canvas from "./components/Canvas";
import Sidebar from "./components/Sidebar";
import "./styles/Index.css"

function App() {

    const[seccion, setSeccion] = useState("Personal");

    return (
        <div className="columna">
            <Header></Header>
            <div className="lado">
                <Sidebar setSeccion={setSeccion}></Sidebar>
                <Canvas seccion={seccion}></Canvas>

            </div>
        </div>

    );
}

export default App;