import React from "react";
import trophyIcon from "../../../public/trophy.svg";
import guaranteeIcon from "../../../public/guarantee.svg";
import shippingIcon from "../../../public/shipping.svg";
import supportIcon from "../../../public/customer-support.svg";
import "./style.scss";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} className="card-icon" />
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const FeatureCard = () => {
  return (
    <div className="feature-card">
      <Card
        icon={trophyIcon}
        title="High Quality"
        description="crafted from top materials"
      />
      <Card
        icon={guaranteeIcon}
        title="Warranty Protection"
        description="Over 2 years"
      />
      <Card
        icon={shippingIcon}
        title="Free Shipping"
        description="Order over 150 $"
      />
      <Card
        icon={supportIcon}
        title="24 / 7 Support"
        description="Dedicated support"
      />
    </div>
  );
};

export default FeatureCard;
