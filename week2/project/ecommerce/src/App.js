import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetails from "./component/ProductDetails";
import Home from "./Home";

function App() {
  return (
    <div className=" App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
