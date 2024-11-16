import { Tab } from "../../components/Tab";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();

  return (
    <>
      <p>Product</p>
      <Tab id={id} />
    </>
  );
};

export default SingleProductPage;
