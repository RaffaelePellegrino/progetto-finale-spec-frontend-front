import { useEffect, useState } from "react";
import GameCard from "../components/gamecard";
import { Link } from "react-router-dom";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .finally(() => setLoading(false));
  }, []);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="">Lista Giochi</h1>
      <Link to={`http://localhost:5173/favorites`}>Lista Desideri</Link>
      <input
        type="text"
        placeholder="Cerca un gioco..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=""
      />

      {loading ? (
        <p>Caricamento...</p>
      ) : filteredGames.length === 0 ? (
        <p>Nessun gioco trovato.</p>
      ) : (
        <div className="card-container">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}
