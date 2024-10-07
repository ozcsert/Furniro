import React, { useState } from "react";
import "./style.scss";

const BuyNowButton = ({ btnName = "BUY NOW" }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`buyNowButton ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default BuyNowButton;
