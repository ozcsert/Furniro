import React, { useState, useEffect } from "react";
import "./index.scss";
import StarRating from "../StarRating/StarRating.jsx";

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/public/data/sample.json")
      .then((response) => {
        console.log("Response Status:", response.status); 
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data); 
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err); 
        setError("An error occurred while loading the data.");
        setLoading(false);
      });
  }, []);
  

  const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        {product.discount ? (
          <span className="new-discount">{product.discount}%</span>
        ) : (
          <span className="new-label">NEW</span>
        )}

        <img src={product.image} alt={product.name} className="product-image" />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-info">{product.description}</p>

        <StarRating rating={product.rating} />

        <div className="product-price">
          <span className="discounted-price">${product.price}</span>
          <span className="original-price">${product.originalPrice}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="product-container">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
