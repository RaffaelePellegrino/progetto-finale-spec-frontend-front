import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <Link to={`/games/${game.id}`} className="card">
      <h2 className="card-title">{game.title}</h2>
      <p className="card-category">{game.category}</p>
    </Link>
  );
}
