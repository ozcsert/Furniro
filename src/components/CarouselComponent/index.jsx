import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import test1 from "../../assets/carouselComponenet/Image.png";
import test2 from "../../assets/carouselComponenet/Rectangle25.png";
import test3 from "../../assets/carouselComponenet/Rectangle26.png";
import ArrowImg from "../../assets/carouselComponenet/RightArrow.png"

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow:2,
    slidesToScroll: 1,
    initialSlide:1,
    variableWidth: true,
    arrows: true,
    nextArrow: <CustomArrow />, 
    };
  return (
    <div className="container">
      <div className="test-div">
        Test Div
      </div>
      <div className="carousel-container">
        <Slider className="carousel" {...settings}>
          <div className="default-img-box">
            <img className="imgs" src={test1} alt="" />
          </div>
          <div className="default-img-box">
            <img className="imgs" src={test2} alt="" />
          </div>
          <div className="default-img-box">
            <img className="imgs" src={test3} alt="" />
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
      <img className="arrow-img" src={ArrowImg} alt="arrow-img"/>
    </div>
  );
};
export default CarouselComponent;
