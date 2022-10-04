import React, { useState } from "react";
import "./App.css";
import Categories from "./component/Categories";
import ProductsList from "./component/ProductsList";
import UseFetch from "./component/Hooks/UseFetch";

function Home() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  let url = "";
  if (selectedCategory) {
    url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
  } else {
    url = "https://fakestoreapi.com/products";
  }
  const { isLoading, error } = UseFetch(url, setProducts);

  const handelCategorySelect = (category) => {
    setSelectedCategory(category);
  };

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
              <div className="main">
                <h1>Products</h1>
                <Categories
                  activeBtn={selectedCategory}
                  handelCategorySelect={handelCategorySelect}
                />
                <ProductsList products={products} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
