import { useEffect, useState } from "react";
import GameCard from "../components/gamecard";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/games")
      .then((res) => {
        if (!res.ok) throw new Error("Errore nel caricamento giochi");
        return res.json();
      })
      .then((data) => setGames(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p className="">Errore: {error}</p>;

  return (
    <div className="">
      <h1 className="">Lista Giochi</h1>
      {games.length === 0 ? (
        <p>Nessun gioco trovato.</p>
      ) : (
        <div className="">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      )}
    </div>
  );
}
