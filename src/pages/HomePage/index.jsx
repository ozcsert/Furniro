import "./style.scss";

import bedroom from "../../../src/assets/Rectangle26.png";
import ExploreCard from "../../components/ExpoloreCardComponent/index";
import OurProductsSectionComponent from "../../components/OurProductsSectionComponent";
import TopCategories from "../../components/TopCategories";

const HomePage = () => {
  return (
    <>
      <div>
        {" "}
        <TopCategories />
      </div>
      <div className="allproduct-container">
        <h1 className="title">Our Products</h1>
        <OurProductsSectionComponent />
        <ExploreCard
          image={bedroom}
          roomType="02"
          description="bedroom"
          title="Rectangle"
        />
      </div>
    </>
  );
};

export default HomePage;

// <div className="best-sellers">
// <BestSellers />
// </div>

// import BestSellers from "../../components/BestSellerComponent";
// import ProductWithCard from "../../components/OurProductsComponent";
// import "./style.scss";

// const HomePage = () => {
//   return (
//     <div className="allproduct-container">
//       <h1 className="title">Our Products</h1>
//       <div className="content-wrapper">
//         <div className="card-left">
//           <div className="test">

//           </div>
//           <div className="best-sellers">
//             <BestSellers />
//           </div>
//         </div>

//         <div className="card-right">
//           <ProductWithCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
