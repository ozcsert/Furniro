import StarRating from "../StarRating/StarRating.jsx";
import "./index.scss";

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

export default ProductCard;
