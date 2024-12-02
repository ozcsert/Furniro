import "./style.scss"
import OurProductsSectionComponent from "../../components/OurProductsSectionComponent"
import TopCategories from "../../components/TopCategories"
import CarouselComponent from "../../components/CarouselComponent"
import FurnitureShareSection from "../../components/FurnitureShareSection"
import Herosection from "../../components/Herosection"

const HomePage = () => {
  return (
    <>
      <div>
        <Herosection />
        <TopCategories />
      </div>
      <div className="allproduct-container">
        <h1 className="title">Our Products</h1>
        <OurProductsSectionComponent />
      </div>
      <CarouselComponent />
      <FurnitureShareSection />
    </>
  )
}

export default HomePage
