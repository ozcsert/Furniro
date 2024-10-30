import "./style.scss";
import React from "react";
import { useLocation } from "react-router-dom";

import bannerLogo from "../../assets/images/bannerLogo.png";
import BreadCrumbComponent from "../BreadCrumbComponent";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const HeaderBanner = () => {
  const location = useLocation();
  const pageTitle = capitalizeFirstLetter(
    location.pathname.split("/").filter(Boolean).pop() || "Home"
  );

  return (
    <div className={`banner-container`}>
      <div className="banner-content">
        <img src={bannerLogo} alt="logo" className="banner-logo" />
        <h1>{pageTitle}</h1>
        <BreadCrumbComponent />
      </div>
    </div>
  );
};

export default HeaderBanner;
