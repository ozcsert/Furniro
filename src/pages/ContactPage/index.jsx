import HeaderBanner from "../../components/HeaderBanner";
import ContactPageComponent from "../../components/ContactPageComponent";
import FeaturesSection from "../../components/FeaturesSection/index";
import FromHandler from "../../components/FormHandler/FormHandler";
import "./style.scss"
const ContactPage = () => {
  return (
    <>
      <HeaderBanner />
      <div className="main-container">
        <div className="billing-form">
          <FromHandler page="billing"  />
        </div>
        <div className="contact-page">
          <ContactPageComponent />
        </div>
      </div>

      <FeaturesSection />
    </>
  );
};

export default ContactPage;
