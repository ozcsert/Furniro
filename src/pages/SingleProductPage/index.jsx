import ProductDetails from "../../components/SingleProductDetails"
import { Tab } from "../../components/Tab"
import { useParams } from "react-router-dom"
import "./style.scss"
import HeaderBanner from "../../components/HeaderBanner"
const SingleProductPage = () => {
  const { id } = useParams()

  return (
    <div>
      <div>
        <HeaderBanner />
      </div>

      <main>
        <ProductDetails id={id} />
        <Tab id={id} />
      </main>
    </div>
  )
}

export default SingleProductPage
