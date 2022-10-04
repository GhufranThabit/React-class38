import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <button className="btn">Products</button>
      </Link>
      <Link to="/favorites">
        <button className="btn">Favorites</button>
      </Link>
    </div>
  );
};

export default Navbar;
