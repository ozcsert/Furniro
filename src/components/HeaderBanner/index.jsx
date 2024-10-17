import "./style.scss";
import React from "react";

import bannerLogo from "../../assets/images/bannerLogo.png";
import right from "../../assets/images/right.png";

const HeaderBanner = ({ title = "Product Comparison", name = "Product Comparison" }) => {
  return (
    <div className={`banner-container`}>
      <div className="banner-content">
        <img src={bannerLogo} alt="logo" className="banner-logo" />
        <h1>{title}</h1>
        <nav className="banner-navigate">
          <span>Home</span>
          <img src={right} alt="right-img" />
          <span className="banner-pagename">{name}</span>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBanner;