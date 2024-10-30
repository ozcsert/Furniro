import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import right from "../../assets/images/right.png";

const BreadCrumbComponent = () => {
  const location = useLocation();
  const pageName = location.pathname.split("/").filter(Boolean).pop() || "Home";

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
