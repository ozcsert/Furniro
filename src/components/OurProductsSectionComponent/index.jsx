import { useRef, useEffect } from "react"
import FilterComponent from "../Filter"
import ProductsContainer from "../ProductsContainer"
import "./style.scss"
import showEye from "../../assets/icons/show-eye.svg"
import hideEye from "../../assets/icons/hide-eye.svg"

const OurProductsSectionComponent = () => {
  const filterSideRef = useRef(null)
  const imgRef = useRef(null)

  const toggleSidebar = () => {
    if (filterSideRef.current && imgRef.current) {
      if (filterSideRef.current.style.display === "none") {
        filterSideRef.current.style.display = "block"
        imgRef.current.src = hideEye
      } else {
        filterSideRef.current.style.display = "none"
        imgRef.current.src = showEye
      }
    }
  }

  useEffect(() => {
    if (window.innerWidth < 600 && filterSideRef.current) {
      filterSideRef.current.style.display = "none"
    }
  }, [])

  return (
    <div className="ourProducts-section-container">
      <div className="hide-sidebar" onClick={toggleSidebar}>
        <img ref={imgRef} src={hideEye} alt="eye" />
      </div>

      <div className="ourProducts__filter-side" ref={filterSideRef}>
        <FilterComponent />
      </div>
      <ProductsContainer />
    </div>
  )
}

export default OurProductsSectionComponent
