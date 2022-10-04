import React, { useState } from "react";
import { useParams } from "react-router-dom";
import UseFetch from "./Hooks/UseFetch";

const ProductDetails = () => {
  const [product, setProduct] = useState({});

  let params = useParams();

  const url = `https://fakestoreapi.com/products/${params.id}`;
  const { error, isLoading } = UseFetch(url, setProduct);

  return (
    <div className="details">
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
          {error ? (
            <p className="error">Something went wrong error: {error}</p>
          ) : (
            <div>
              <h1>{product.title}</h1>
              <img
                className="img"
                src={product.image}
                alt={product.title}
              ></img>
              <p className="description">{product.description}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
