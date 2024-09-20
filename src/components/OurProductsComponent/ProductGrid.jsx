import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.scss';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://mockapi.example.com/products'); // Replace with your mock API URL
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-container">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Below Grid Sections */}
      <div className="below-grid-section"></div>
      <div className="below-grid-section"></div>
      <div className="below-grid-section"></div>
    </div>
  );
};

export default ProductGrid;
