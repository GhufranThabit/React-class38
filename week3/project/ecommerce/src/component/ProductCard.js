import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from "./FavoriteIcon";

const ProductCard = ({ product }) => {
  return (
    <div>
      <FavoriteIcon product={product} />
      <Link to={`/product/${product.id}`}>
        <img className="img" src={product.image} alt={product.title}></img>
        <p className="title">{product.title}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
