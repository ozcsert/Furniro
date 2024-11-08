import HeaderBanner from "../../components/HeaderBanner";
import ProductCheckoutDetailsComponent from "../../components/ProductCheckoutDetailsComponent";
import FeatureCard from "../../components/FeatureCard";

const CheckoutPage = () => {
  return (
    <>
      <HeaderBanner/>
      <ProductCheckoutDetailsComponent/>
      <div style={{ marginBottom: "80px" }}>
        <FeatureCard />
      </div>
    </>
  )

}

export default CheckoutPage;