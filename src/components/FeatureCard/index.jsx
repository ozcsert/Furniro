import React from "react";
<<<<<<< HEAD
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
=======
import "./style.scss";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="feature-card">
      <img src={icon} alt={title} className="feature-card__icon" />
      <div className="feature-card__content">
        <h3 className="feature-card__title">{title}</h3>
        <p className="feature-card__description">{description}</p>
>>>>>>> ozc/reset-branch
      </div>
    </div>
  );
};

<<<<<<< HEAD
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

=======
>>>>>>> ozc/reset-branch
export default FeatureCard;
