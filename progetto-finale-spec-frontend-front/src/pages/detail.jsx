import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/games/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gioco non trovato");
        return res.json();
      })
      .then((data) => setGame(data.game))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);
  console.log(game);

  if (loading) return <p className="">Caricamento...</p>;
  if (error) return <p className="">Errore: {error}</p>;
  if (!game) return <p className="">Nessun gioco trovato.</p>;

  return (
    <div className="">
      <h1 className="">{game.title}</h1>
      <p>
        <strong>Categoria:</strong> {game.category}
      </p>
      <p>
        <strong>Piattaforma:</strong> {game.platform}
      </p>
      <p>
        <strong>Anno di uscita:</strong> {game.releaseYear}
      </p>
      <p>
        <strong>Descrizione:</strong> {game.description}
      </p>
    </div>
  );
}
