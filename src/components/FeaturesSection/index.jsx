import React from "react";
import FeatureCard from "../FeatureCard";
import trophyIcon from "../images/Featureİmg/trophy.svg";
import guaranteeIcon from "../images/Featureİmg/guarantee.svg";
import shippingIcon from "../images/Featureİmg/Shipping.svg";
import supportIcon from "../images/Featureİmg/customer-support.svg";
import "./style.scss";

const data = [
  {
    icon: trophyIcon,
    title: "High Quality",
    description: "crafted from top materials",
  },
  {
    icon: guaranteeIcon,
    title: "Warranty Protection",
    description: "Over 2 years",
  },
  {
    icon: shippingIcon,
    title: "Free Shipping",
    description: "Order over 150 $",
  },
  {
    icon: supportIcon,
    title: "24 / 7 Support",
    description: "Dedicated support",
  },
];

const FeatureSection = () => {
  return (
    <div className="feature-section">
      {data.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeatureSection;
