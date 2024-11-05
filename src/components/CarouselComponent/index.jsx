import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bedroom1 from "../../assets/carouselComponenet/Image.png";
import Bedroom2 from "../../assets/carouselComponenet/Rectangle25.png";
import Bedroom3 from "../../assets/carouselComponenet/Rectangle26.png";
import ArrowImg from "../../assets/carouselComponenet/RightArrow.png";
import ExploreCard from "../ExpoloreCardComponent";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 1,
    variableWidth: true,
    arrows: true,
    nextArrow: <CustomArrow />,
  };
  return (
    <div className="container">
      <div className="test-div">
        <h5>
          Test DivTest DivTest DivTest DivTest DivTest DivTest DivTest DivTest
          DivTest DivTes
        </h5>
      </div>
      <div className="carousel-container">
        <Slider className="carousel" {...settings}>
          <div className="default-img-box">
            <ExploreCard
              image={Bedroom3}
              title="Inner Peace"
              description="Bed Room"
              roomType="03"
            />
          </div>
          <div className="default-img-box">
            <ExploreCard
              image={Bedroom1}
              title="Inner Peace"
              description="Bed Room"
              roomType="01"
            />
          </div>
          <div className="default-img-box">
            <ExploreCard
              image={Bedroom2}
              title="Inner Peace"
              description="Bed Room"
              roomType="02"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};
const CustomArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow-box" onClick={onClick}>
      <img className="arrow-img" src={ArrowImg} alt="arrow-img" />
    </div>
  );
};
export default CarouselComponent;
