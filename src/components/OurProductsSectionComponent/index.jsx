import FilterComponent from "../Filter"
import ProductsContainer from "../ProductsContainer"
import "./style.scss"

const OurProductsSectionComponent = () => {
  return (
    <div className="ourProducts-section-container">
      <div className="ourProducts__filter-side">
        <FilterComponent />
      </div>
      <ProductsContainer />
    </div>
  )
}

export default OurProductsSectionComponent
