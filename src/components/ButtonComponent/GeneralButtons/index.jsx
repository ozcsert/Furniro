import React, { useState } from "react";
import "./style.scss";

const GeneralButtons = ({
  btnName = "Button",
  width = "auto",
  height = "auto",
  backgroundColor = "#b88e2f",
  fontSize = "16px",
  borderColor = "#b88e2f",
  textColor = "#b88e2f",
  responsiveStyles = {},
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      className={`generalButton ${isActive ? "active" : ""}`}
      style={{
        width,
        height,
        backgroundColor: isActive ? "#ff9900" : backgroundColor,
        fontSize,
        border: `2px solid ${borderColor}`,
        color: textColor,
        ...responsiveStyles,
      }}
      onClick={() => setIsActive(!isActive)}
    >
      {btnName}
    </button>
  );
};

export default GeneralButtons;
