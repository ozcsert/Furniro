import { useRef, useEffect, useState } from "react"
import FilterComponent from "../Filter"
import ProductsContainer from "../ProductsContainer"
import "./style.scss"
import showEye from "../../assets/icons/show-eye.svg"
import hideEye from "../../assets/icons/hide-eye.svg"
import GeneralButtons from "../../components/ButtonComponent/GeneralButtons"
import BestSellers from "../BestSellerComponent"
import useSWR from "swr"

async function fetcher(url) {
  const response = await fetch(url)
  if (!response.ok) throw new Error("Product not found")
  return response.json()
}

const OurProductsSectionComponent = () => {
  const filterSideRef = useRef(null)
  const imgRef = useRef(null)
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [filterData, setFilterData] = useState([])

  const { data, error, isLoading } = useSWR(
    `https://672b2ff4976a834dd025f8f2.mockapi.io/api/furniture/furnitures`,
    fetcher
  )

  useEffect(() => {
    if (window.innerWidth < 700 && filterSideRef.current) {
      filterSideRef.current.style.display = "none"
    }

    if (data) {
      setFilterData(data)
    }
  }, [data])

  const toggleSidebar = () => {
    if (filterSideRef.current && imgRef.current) {
      if (filterSideRef.current.style.display === "none") {
        filterSideRef.current.style.display = "flex"
        imgRef.current.src = hideEye
      } else {
        filterSideRef.current.style.display = "none"
        imgRef.current.src = showEye
      }
    }
  }

  const handleShowMoreClick = () => {
    setShowAllProducts(!showAllProducts)
  }

  const handleFilterData = (data) => {
    setFilterData(data)
  }

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <div className="ourProducts-section-container">
        <div className="hide-sidebar" onClick={toggleSidebar}>
          <img ref={imgRef} src={hideEye} alt="eye" />
        </div>

        <div className="ourProducts__filter-side" ref={filterSideRef}>
          <FilterComponent onFilterChange={handleFilterData} />
          <BestSellers />
        </div>
        <ProductsContainer
          products={showAllProducts ? filterData : filterData.slice(0, 12)}
        />
      </div>
      <GeneralButtons
        btnName={showAllProducts ? "Show Less" : "Show More"}
        textColor="white"
        onClickCallback={handleShowMoreClick}
      />
    </>
  )
}

export default OurProductsSectionComponent
