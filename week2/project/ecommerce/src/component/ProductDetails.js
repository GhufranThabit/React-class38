import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  let params = useParams();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`
        );
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    })();
  }, [params.id]);

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
