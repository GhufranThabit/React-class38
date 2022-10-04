import React, { useState } from "react";
import UseFetch from "./Hooks/UseFetch";

const Categories = ({ activeBtn, handelCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  const url = "https://fakestoreapi.com/products/categories";
  const { error, isLoading } = UseFetch(url, setCategories);

  return (
    <div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {error ? (
            <p className="error">Something went wrong error: {error}</p>
          ) : (
            <>
              <div className="btn_area">
                {categories.map((category) => {
                  return (
                    <button
                      key={category}
                      className={activeBtn === category ? "activeBtn" : "btn"}
                      onClick={() => handelCategorySelect(category)}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Categories;
