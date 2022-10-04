import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";

const FavoriteIcon = ({ product }) => {
  const { favoriteItems, deleteFavItem, addFavItem } =
    useContext(GlobalContext);

  const favoritesChecker = (id) => {
    const boolean = favoriteItems.some((product) => product.id === id);
    return boolean;
  };
  return (
    <div className="heart-icon">
      {favoritesChecker(product.id) ? (
        <img
          src={heartSolid}
          alt="heart"
          onClick={() => {
            deleteFavItem(product.id);
          }}
        />
      ) : (
        <img
          src={heartRegular}
          alt="heart"
          onClick={() => {
            addFavItem(product);
          }}
        />
      )}
    </div>
  );
};

export default FavoriteIcon;
