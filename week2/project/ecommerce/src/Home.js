import React, { useEffect, useState } from "react";
import "./App.css";
import Categories from "./component/Categories";
import ProductsList from "./component/ProductsList";

function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState("");

  //get all the categories
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    })();
  }, []);

  //get all the products
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const values = await response.json();
        setProducts(values);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    })();
  }, []);

  //get one category

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : "https://fakestoreapi.com/products"
        );
        const results = await response.json();
        setProducts(results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    })();
  }, [selectedCategory]);

  const handelCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {error ? (
            <p className="error">Something went wrong error: {error}</p>
          ) : (
            <>
              <h1>Products</h1>
              <div className="main">
                <Categories
                  categories={categories}
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
