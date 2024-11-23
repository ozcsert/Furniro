import { Tab } from "../../components/Tab";
import { useParams } from "react-router-dom";
import SingleProduct from "../../components/SingleProduct/index";
const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <>
      <p>Product</p>
      <div>
        <SingleProduct />
      </div>
      <Tab id={id} />
    </>
  );
};

export default SingleProductPage;
