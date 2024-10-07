// ProductDetails.js
import React from "react";
import "./style.scss";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <h1 className="product-title">Asgaard sofa</h1>
      <p className="product-price">$250.000</p>
      <div className="reviews">
        <div className="rating">
          <img
            src="public/Furniture/productStars.svg" // 4.5 yıldız içeren SVG
            alt="Stars"
            style={{ width: "100px", height: "20px" }} // Gerekirse boyutlandırın
          />
        </div>
        <span> | 5 Customer Review</span>
      </div>
      <p className="description">
        Setting the bar as one of the loudest speakers in its class, the Kilburn
        is a compact, stout-hearted hero with a well-balanced audio which boasts
        a clear midrange and extended highs for a sound.
      </p>
      <p className="color-label">Color</p>
      <div className="color-options">
        <span
          className="color-option"
          style={{ backgroundColor: "#7B61FF" }}
        ></span>
        <span
          className="color-option"
          style={{ backgroundColor: "#333" }}
        ></span>
        <span
          className="color-option"
          style={{ backgroundColor: "#b88e2f" }}
        ></span>
      </div>
      <div className="quantity-add-to-cart">
        <div className="quantity-control">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <button className="add-to-cart">Add To Cart</button>
        <button className="compare">+ Compare</button>
      </div>
      <div className="product-meta">
        <p>
          <strong>SKU:</strong> SS001
        </p>
        <p>
          <strong>Category:</strong> Sofas
        </p>
        <p>
          <strong>Tags:</strong> Sofa, Chair, Home, Shop
        </p>
      </div>
      <div className="socials">
        <span>Share:</span>
        <a href="#facebook">
          <img src="public/Furniture/facebook.svg" alt="Facebook" />
        </a>
        <a href="#linkedin">
          <img src="public/Furniture/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="#twitter">
          <img src="public/Furniture/twitter.svg" alt="Twitter" />
        </a>
      </div>
    </div>
  );
};

export default ProductDetails;
