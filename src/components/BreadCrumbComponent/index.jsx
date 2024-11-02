import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import right from "../../assets/images/right.png";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const BreadCrumbComponent = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const pageName = capitalizeFirstLetter(pathSegments[0] || "Home");

  return (
    <nav className="banner-navigate">
      <Link to="/" className="home-link">
        Home
      </Link>
      <img src={right} alt="right-img" />
      <span className="banner-pagename">{pageName}</span>
    </nav>
  );
};

export default BreadCrumbComponent;
