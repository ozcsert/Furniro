import "./styles.scss";
import BreadCrumbComponent from "../BreadCrumbComponent/index";

function ProductNavigation({ productTitle }) {
  return (
    <div className="product-navigation-content">
      <BreadCrumbComponent productTitle={productTitle} />
    </div>
  );
}

export default ProductNavigation;
