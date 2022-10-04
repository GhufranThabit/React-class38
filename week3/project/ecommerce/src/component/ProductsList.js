import React from "react";

import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div>
      <ul className="list_wrapper">
        {products.map((product) => (
          <li className="Products-items">
            <ProductCard product={product} key={product.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
