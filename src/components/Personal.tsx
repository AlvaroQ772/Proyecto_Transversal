import { useState, useEffect } from "react";
import EmployeeCard from "./EmployeeCard";
import "../styles/Personal.css"; 

interface Empleado {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

function Personal() {
  const [empleados, setEmpleados] = useState<Empleado[]>([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json()).then((data) => {
      setTimeout(() => {
        setEmpleados(data);
        setCargando(false);
      }, 2000);
    });
}, []);

  return (
    <div className="personal">
      <input className="buscador" type="text" placeholder="Buscar empleado por nombre:" value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
      {cargando ? (
        <p>Cargando datos del servidor un segundo por favor...</p>
      ):(
        <div className="cuadricula">{empleados.filter((emp) => emp.name.toLowerCase().includes(busqueda.toLowerCase())).map((emp) => (
              <EmployeeCard
                key={emp.id}
                name={emp.name}
                email={emp.email}
                city={emp.address.city}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default Personal;