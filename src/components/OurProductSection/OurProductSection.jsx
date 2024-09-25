import React, { useState, useEffect } from "react";
import "./OurProductSection.scss";



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
            rating: 4, 
          },
          {
            id: 2,
            name: "Syltherine",
            price: 39.99,
            originalPrice: 59.99,
            image: "src/components/OurProductSection/image/image.svg",
            description: "Stylish cafe chair",
            rating: 3, 
          },
          {
            id: 3,
            name: "Syltherine",
            price: 19.99,
            originalPrice: 29.99,
            discount: 10,
            image: "src/components/OurProductSection/image/image.svg",
            description: "Stylish cafe chair",
            rating: 5, 
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

        <StarRating rating={product.rating} onRating={() => {}} />

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
