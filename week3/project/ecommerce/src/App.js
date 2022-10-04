import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FavoritesList from "./component/FavoritesList";
import Navbar from "./component/Navbar";
import ProductDetails from "./component/ProductDetails";
import Home from "./Home";

function App() {
  return (
    <div className=" App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
