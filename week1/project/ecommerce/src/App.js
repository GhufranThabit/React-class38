import React, { useState } from "react";
import "./App.css";
import Categories from "./component/Categories";
import ProductsList from "./component/ProductsList";
import products from "./fake-data/all-products";

function App() {
  const [selectedProducts, setSelectedProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handelCategorySelect = (catItem) => {
    const result = products.filter(
      (product) => product.category === catItem.replace("FAKE: ", "")
    );

    setSelectedCategory(catItem);
    setSelectedProducts(result);
  };

  return (
    <div className=" App">
      <h1>Products</h1>
      <div className="main">
        <Categories
          selectedCategory={selectedCategory}
          handelCategorySelect={handelCategorySelect}
        />
        <ProductsList products={selectedProducts} />
      </div>
    </div>
  );
}

export default App;
