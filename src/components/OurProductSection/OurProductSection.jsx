import React, { useState, useEffect } from "react";
import "./OurProductSection.scss";


const StarRating = ({ rating, onRating }) => {
  const [hover, setHover] = useState(null);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;

        return (
          <span
            key={index}
            className={currentRating <= (hover || rating) ? "filled-star" : "empty-star"}
            onClick={() => onRating(currentRating)}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
            style={{ cursor: "pointer" }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

const OurProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        const fetchedProducts = [
            {
              id: 1,
              name: "Syltherine",
              price: 29.99,
              originalPrice: 49.99, 
              discount: 20, 
              image: "src/components/OurProductSection/image/image.svg",
              description: "Stylish cafe chair",
            },
            {
              id: 2,
              name: "Syltherine",
              price: 39.99,
              originalPrice: 59.99, 
              image: "src/components/OurProductSection/image/image.svg",
              description: "Stylish cafe chair",
            },
            {
              id: 3,
              name: "Syltherine",
              price: 19.99,
              originalPrice: 29.99, 
              discount: 10, 
              image: "src/components/OurProductSection/image/image.svg",
              description: "Stylish cafe chair",
            },
          ];
          

        setProducts(fetchedProducts);
        setLoading(false);
      } catch (err) {
        setError("Veri yüklenirken bir hata oluştu.");
        setLoading(false);
      }
    }, 1000);
  }, []);


  const ProductCard = ({ product }) => {
    const [rating, setRating] = useState(0);
  
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
  
        <StarRating rating={rating} onRating={setRating} />
  
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
        <p>Yükleniyor...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default OurProductSection;
