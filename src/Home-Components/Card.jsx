import "../Home-Components/Card.style.css";
const Card = ({ employee }) => {
  const { id, name, email, username } = employee;

  return (
    <div className="card-container">
      <img
        alt={`employee ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <h4>{email}</h4>
      <h4>{username}</h4>
    </div>
  );
};

export default Card;
