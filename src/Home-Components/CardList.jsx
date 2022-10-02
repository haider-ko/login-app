import "../Home-Components/CardList.style.css";
import Cards from "./Cards";
const CardList = ({ employees }) => (
  <div className="card-list">
    {employees.map((employee) => {
      return <Cards key={employee.id} employee={employee} />;
    })}
  </div>
);

export default CardList;