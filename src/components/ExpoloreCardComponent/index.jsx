import "./style.scss";
import { Link } from "react-router-dom";

import arrow from "../../assets/arrow.svg";
import bedroom from "../../assets/bedroom.png";
import vector from "../../assets/Vector-1.svg";
import bedroom2 from "../../assets/Rectangle25.png"
import bedroom3 from "../../assets/Rectangle26.png"

const ExploreCard = () => {
  const images = [bedroom, bedroom2, bedroom3];

  return (
    <div className="explore-card-wrapper">
      {images.map((image, index) => (
        <div className="products-wrapper" key={index}>
          <img src={image} alt={`bedroom-${index + 1}`} className="product-image" />

          <div className="info-container">
            <div className="info-section">
              <div className="info-top">
                <h6>
                  <span>{`0${index + 1}`}</span>
                  <img src={vector} alt="vector divider" className="vector-divider" />
                  <span>{`Bed Room ${index + 1}`}</span>
                </h6>
              </div>
              <div className="info-bottom">
                <h3>Inner Peace</h3>
              </div>
            </div>

            <div className="redirect-button">
              <Link to="#">
                <img src={arrow} alt="Arrow" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ExploreCard;
