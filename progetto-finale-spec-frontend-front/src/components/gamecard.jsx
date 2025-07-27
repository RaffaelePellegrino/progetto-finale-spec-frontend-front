import { Link } from "react-router-dom";
import { useFavorites } from "./favoritescontext";

export default function GameCard({ game }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((g) => g.id === game.id);
  console.log(favorites, "si sono io");
  return (
    <div className="card">
      <Link to={`/games/${game.id}`}>
        <h2 className="card-title">{game.title}</h2>
        <img src={game.image} alt={game.title} className="card-image" />
        <p className="card-category">{game.category}</p>
      </Link>
      <button onClick={() => toggleFavorite(game)} className="favorite">
        {isFavorite ? "❤️​" : "🤍"}
      </button>
    </div>
  );
}
