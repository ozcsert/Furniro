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
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const FeatureCard = () => {
  return (
    <div className="feature-card">
      <Card
        icon={trophyIcon}
        title="Yüksek Kalite"
        description="En iyi malzemelerden üretilmiştir"
      />
      <Card
        icon={guaranteeIcon}
        title="Garanti Koruması"
        description="2 yıldan fazla"
      />
      <Card
        icon={shippingIcon}
        title="Ücretsiz Kargo"
        description="150 $ üzeri siparişler"
      />
      <Card
        icon={supportIcon}
        title="7/24 Destek"
        description="Özel müşteri desteği"
      />
    </div>
  );
};

export default FeatureCard;
