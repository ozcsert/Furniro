import HeaderBanner from "../../components/HeaderBanner";
import ContactPageComponent from "../../components/ContactPageComponent";
import FeatureCard from "../../components/FeatureCard";

const ContactPage = () => {
  return (
    <>
      <HeaderBanner/>
      <ContactPageComponent />
      <div style={{ marginBottom: "80px" }}>
        <FeatureCard />
      </div>
    </>
  )

}

export default ContactPage;