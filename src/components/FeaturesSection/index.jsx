import React from "react";
import FeatureCard from "../FeatureCard";
import trophyIcon from "../images/Featureİmg/trophy.svg";
import guaranteeIcon from "../images/Featureİmg/guarantee.svg";
import shippingIcon from "../images/Featureİmg/Shipping.svg";
import supportIcon from "../images/Featureİmg/customer-support.svg";
import "./style.scss";
const FeatureSection = () => {
  return (
    <div className="feature-section">
      <FeatureCard
        icon={trophyIcon}
        title="High Quality"
        description="crafted from top materials"
      />
      <FeatureCard
        icon={guaranteeIcon}
        title="Warranty Protection"
        description="Over 2 years"
      />
      <FeatureCard
        icon={shippingIcon}
        title="Free Shipping"
        description="Order over 150 $"
      />
      <FeatureCard
        icon={supportIcon}
        title="24 / 7 Support"
        description="Dedicated support"
      />
    </div>
  );
};

export default FeatureSection;
