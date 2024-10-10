import "./style.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../assets/images/FurnitureShareSection/Rectangle38.png";
import Img2 from "../../assets/images/FurnitureShareSection/Rectangle40.png";
import Img3 from "../../assets/images/FurnitureShareSection/Rectangle43.png";
import Img4 from "../../assets/images/FurnitureShareSection/Rectangle45.png";
import Img5 from "../../assets/images/FurnitureShareSection/Rectangle37.png";
import Img6 from "../../assets/images/FurnitureShareSection/Rectangle39.png";
import Img7 from "../../assets/images/FurnitureShareSection/Rectangle41.png";
import Img8 from "../../assets/images/FurnitureShareSection/Rectangle44.png";
import Img9 from "../../assets/images/FurnitureShareSection/Rectangle36.png";

const FurnitureShareSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  const settingsRtl = {
    ...settings,
    rtl: true,
  };

  return (
    <div className="share-section-container">
      <div className="title-container">
        <h5 className="little-title">Share your setup with</h5>
        <h2 className="big-title">#FurniroFurniture</h2>
      </div>
      <div className="slider-container">
        <Slider className="image-row" {...settings}>
          <div className="img one">
            <img className="imgs" src={Img1} alt="Image 1" />
          </div>
          <div className="img two">
            <img className="imgs" src={Img2} alt="Image 2" />
          </div>
          <div className="img three">
            <img className="imgs" src={Img3} alt="Image 3" />
          </div>
          <div className="img four">
            <img className="imgs" src={Img4} alt="Image 4" />
          </div>
        </Slider>
        <Slider className="image-row" {...settingsRtl}>
          <div className="img five">
            <img className="imgs" src={Img5} alt="Image 5" />
          </div>
          <div className="img six">
            <img className="imgs" src={Img6} alt="Image 6" />
          </div>
          <div className="img seven">
            <img className="imgs" src={Img7} alt="Image 7" />
          </div>
          <div className="img eight">
            <img className="imgs" src={Img8} alt="Image 8" />
          </div>
          <div className="img nine">
            <img className="imgs" src={Img9} alt="Image 9" />
          </div>
        </Slider>
        <Slider className="image-row" {...settings}>
          <div className="img five">
            <img className="imgs" src={Img5} alt="Image 5" />
          </div>
          <div className="img six">
            <img className="imgs" src={Img6} alt="Image 6" />
          </div>
          <div className="img seven">
            <img className="imgs" src={Img7} alt="Image 7" />
          </div>
          <div className="img eight">
            <img className="imgs" src={Img8} alt="Image 8" />
          </div>
          <div className="img nine">
            <img className="imgs" src={Img9} alt="Image 9" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default FurnitureShareSection;
