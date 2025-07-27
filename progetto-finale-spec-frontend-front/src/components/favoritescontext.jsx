import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const toggleFavorite = (game) => {
    const isAlreadyFavorite = favorites.some((g) => g.id === game.id);
    if (isAlreadyFavorite) {
      setFavorites((prev) => prev.filter((g) => g.id !== game.id));
    } else {
      setFavorites((prev) => [...prev, game]);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
