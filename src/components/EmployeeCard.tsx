interface EmployeeProps {
  name: string;
  email: string;
  city: string;
}

function EmployeeCard({ name, email, city }: EmployeeProps) {
  return (
    <div className="tarjeta">
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Ciudad:</strong> {city}</p>
    </div>
  );
}

export default EmployeeCard;