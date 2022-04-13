import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pokemons from "../features/Pokemons";

const AppRoutes = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pokemons />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes;