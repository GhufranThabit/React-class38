import React from "react";

const ProductsList = ({ products }) => {
  return (
    <div>
      <ul className="list_wrapper">
        {products.map((product, id) => {
          return (
            <li className="Products-items" key={id}>
              <img
                className="img"
                src={product.image}
                alt={product.title}
              ></img>
              <p className="title">{product.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
