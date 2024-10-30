import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.scss";

const Breadcrumbs = () => {
  const location = useLocation();
  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index) => {
      currentLink.push(`/${crumb}`);
      const isLast =
        index ===
        location.pathname.split("/").filter((crumb) => crumb !== "").length - 1;

      return (
        <div className="crumb" key={crumb}>
          {isLast ? (
            <p>{crumb}</p>
          ) : (
            <Link to={currentLink.join("/")}>
              <p>{crumb}</p>
            </Link>
          )}
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
};

export default Breadcrumbs;





