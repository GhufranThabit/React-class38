import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import ProductCard from "./ProductCard";

const FavoritesList = () => {
  const { favoriteItems } = useContext(GlobalContext);
  return (
    <div>
      <ul>
        <h1>Favorites</h1>
        <li className="fav-items">
          {favoriteItems.length > 0 ? (
            favoriteItems.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          ) : (
            <h1>Pick your favorites</h1>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FavoritesList;
