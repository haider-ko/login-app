import "../Home-Components/CardList.style.css";
import Cards from "./Cards";
const CardList = ({ employees }) => (
  <div className="card-list">
    {employees.filter((employee) => {
      return <Cards key={employee.id} employee={employee} />;
    })}
  </div>
);

export default CardList;
