import React, { useEffect, useState } from "react";
import "./App.css";
import Categories from "./component/Categories";
import ProductsList from "./component/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      } catch (err) {
        console.log(err);
      }
    })();
  });

  //get all the products
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (err) {}
    })();
  }, []);

  //get one the category

  const handelCategorySelect = async (category) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const results = await response.json();
      setProducts(results);
      setSelectedCategory(category);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" App">
      <h1>Products</h1>
      <div className="main">
        <Categories
          categories={categories}
          activeBtn={selectedCategory}
          handelCategorySelect={handelCategorySelect}
        />
        {isLoading ? <div>Loading</div> : <ProductsList products={products} />}
      </div>
    </div>
  );
}

export default App;
