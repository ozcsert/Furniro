import { Tab } from "../../components/Tab";
import { useParams } from "react-router-dom";
import { products } from "../../constants/products";

const SingleProductPage = () => {
  const { id } = useParams();

  const productID = Number(id);

  const product = products.find((product) => product.id === productID);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <>
      {/* <p> Product </p>
      <Tab product={product} /> */}
    </>
  );
};

export default SingleProductPage;
