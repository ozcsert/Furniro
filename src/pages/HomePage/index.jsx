import BestSellers from "../../components/BestSellerComponent";
import ProductWithCard from "../../components/OurProductsComponent";

import "./style.scss";

const HomePage = () => {
  return (
    <>
      <div className="productsall-container">
        <h1 className="name">Our Products</h1>

        <ProductWithCard />
        <BestSellers />
      </div>
    </>
  );
};

export default HomePage;
