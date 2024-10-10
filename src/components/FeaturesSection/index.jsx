import React from "react";
import FeatureCard from "../FeatureCard";
import trophyIcon from "../../../public/trophy.svg";
import guaranteeIcon from "../../../public/guarantee.svg";
import shippingIcon from "../../../public/shipping.svg";
import supportIcon from "../../../public/customer-support.svg";
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
