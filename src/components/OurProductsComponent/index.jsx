import React, { useState, useEffect } from "react";
import "./index.scss";
import StarRating from "../StarRating/StarRating.jsx";

const ProductWithCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("../../../src/data/sample.json")
      .then((response) => {
        console.log("Response Status:", response.status);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.id >= 1 && product.id <= 12
        );
        console.log("Filtered Data:", filteredProducts);
        setProducts(filteredProducts);
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
      <h2 className="name">Our Products</h2>
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

export default ProductWithCard;
