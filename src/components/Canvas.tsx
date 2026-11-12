import Personal from "./Personal";
import "../styles/Canvas.css";
import "../styles/Index.css"

interface Props{
seccion: string;
}

function Canvas({seccion}: Props) {
    return (

        <div className="canvas">
            <div className="mensaje">
            {seccion === 'Personal' && <Personal/>}
            {seccion === 'Inventario' && <h1>Inventario</h1>}
            {seccion === 'Incidencias' && <h1>Incidencias</h1>}
            </div>
        </div>
    );
}

export default Canvas;