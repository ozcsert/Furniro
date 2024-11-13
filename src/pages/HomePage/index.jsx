import BestSellers from "../../components/BestSellerComponent";
import ProductWithCard from "../../components/OurProductsComponent";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="allproduct-container">
      <h1 className="title">Our Products</h1>
      <div className="content-wrapper">
        <div className="card-left">
          <div className="test">
          
          </div>
          <div className="best-sellers">
            <BestSellers />
          </div>
        </div>

        <div className="card-right">
          <ProductWithCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
