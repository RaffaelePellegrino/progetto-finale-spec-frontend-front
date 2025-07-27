import { useFavorites } from "../components/favoritescontext";
import GameCard from "../components/gamecard";
import { Link } from "react-router-dom";

export default function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <h1 className="">Lista Desideri</h1>
      <Link to={`/`}>← Torna alla Home</Link>

      {favorites.length === 0 ? (
        <p>Nessun gioco aggiunto alla lista dei desideri</p>
      ) : (
        <div className="card-container">
          {favorites.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}
