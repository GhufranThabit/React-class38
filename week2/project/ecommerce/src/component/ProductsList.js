import React from "react";

import { Link } from "react-router-dom";

const ProductsList = ({ products }) => {
  return (
    <div>
      <ul className="list_wrapper">
        {products.map((product, id) => {
          return (
            <li key={id} className="Products-items">
              <Link to={`/product/${product.id}`}>
                <img
                  className="img"
                  src={product.image}
                  alt={product.title}
                ></img>
                <p className="title">{product.title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
