import "./style.scss"
import PropTypes from "prop-types"
import AsgardSofa from "../../assets/Product/extras/Asgaard-Sofa1.svg"
import AsgardSofaL from "../../assets/Product/extras/Asgaard-SofaL.svg"

export const Tab = ({ product }) => {
  return (
    <div>
      <div className="tab-container">
        <div className="tab__switches">
          <h3>Description</h3>
          <h3>Additional Information</h3>
          <h3>Reviews</h3>
        </div>
        <div className="tab__descriptions">
          <p>{product.extras.detailedDescriptions[0]}</p>
          <p>{product.extras.detailedDescriptions[1]}</p>
        </div>
        <div className="tab__images">
          <div className="img__wrapper">
            <img src={AsgardSofa} alt="awd" />
          </div>
          <div className="img__wrapper">
            <img src={AsgardSofaL} alt="awd" />
          </div>
        </div>
      </div>
    </div>
  )
}

Tab.propTypes = {
  product: PropTypes.object,
}
