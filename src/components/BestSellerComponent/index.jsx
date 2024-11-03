import  { useState, useEffect } from "react";
import StarRating from "../StarRating/StarRating.jsx";
import "./style.scss";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("../../../src/data/sample.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter(
          (product) => product.id >= 13 && product.id <= 16
        );
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="best-seller">
      <h2>Best Sellers</h2>
      <div className="clothes">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div className="product">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <StarRating rating={product.rating} />
                <div className="price-info">
                  <span className="original-price">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="current-price">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
