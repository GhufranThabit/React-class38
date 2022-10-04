import React, { createContext, useState } from "react";

//create context
export const GlobalContext = createContext(null);

//provider component
export const GlobalProvider = ({ children }) => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  const deleteFavItem = (id) => {
    setFavoriteItems(favoriteItems.filter((item) => item.id !== id));
  };
  const addFavItem = (item) => {
    setFavoriteItems([...favoriteItems, item]);
  };

  return (
    <GlobalContext.Provider
      value={{ favoriteItems, deleteFavItem, addFavItem }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
