import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/Detail";
import Favorites from "./pages/favoritespage";
import NotFound from "./pages/notfound";
import "./App.css";
import { FavoritesProvider } from "./components/favoritescontext";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
