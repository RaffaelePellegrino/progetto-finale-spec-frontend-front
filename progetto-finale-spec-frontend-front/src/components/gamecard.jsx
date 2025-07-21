import { Link } from "react-router-dom";

export default function GameCard({ game }) {
  return (
    <Link to={`/games/${game.id}`}>
      <h2 className="">{game.title}</h2>
      <p className="">{game.category}</p>
    </Link>
  );
}
