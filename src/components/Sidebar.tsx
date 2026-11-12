import "../styles/Sidebar.css";


interface Props{
setSeccion:( seccion: string ) => void;
}

function Sidebar({ setSeccion }: Props) {
    return (
        <div className="vertical">
            <button className="boton" onClick={()=>setSeccion('Personal')}>Personal</button>
            <button className="boton" onClick={()=>setSeccion('Inventario')}>Inventario</button>
            <button className="boton" onClick={()=>setSeccion('Incidencias')}>Incidencias</button>
        </div>
    );
}

export default Sidebar;