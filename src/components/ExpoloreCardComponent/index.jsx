import "./style.scss";
import { Link } from "react-router-dom";
const ExploreCardComponent = () => {
  return (
    <div className="explore-card-wrapper">
      <div className="products-wrapper">
        <img
          src="src/assets/bedroom.png"
          alt="bedroom"
          className="product-image"
        />
        <div className="info-section">
          <div className="info-top">
            <h6>01 Bed Room</h6>
          </div>
          <div className="info-bottom">
            <h3>Inner Peace </h3>
          </div>
        </div>

        <div className="redirect-button">
          <Link to="#">
            <img src="src/assets/arrow.svg" alt="Arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreCardComponent;
