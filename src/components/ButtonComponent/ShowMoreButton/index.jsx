import React, { useState } from "react";
import "./style.scss";

const ShowMoreButton = ({ btnName = "Show More" }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      className={`showMoreButton ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {btnName}
    </button>
  );
};

export default ShowMoreButton;
