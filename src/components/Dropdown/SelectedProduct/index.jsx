import "./style.scss"
import cancelProduct from "../../../assets/SelectedProduct/selectedProductCancel.svg"
import PropTypes from "prop-types"
import sofa from "../../../assets/SelectedProduct/sofa.svg"

const SelectedProduct = ({ type, product, deleteProduct }) => {
  return (
    <div className="selectedProduct-container">
      <div className="img-wrapper">
        <img src={sofa} alt="sofa" />
      </div>
      <div className="product-info-container">
        <h4>{product.name}</h4>
        {type === "Cart" && (
          <div className="product-subinfo">
            <p>{/*   product.quantity hesaplamasi gelecek  */}1</p>
            <p>X</p>
            <p>Rs. {product.price}</p>
          </div>
        )}
      </div>
      <div className="product-delete">
        <button onClick={deleteProduct}>
          <img src={cancelProduct} alt="" />
        </button>
      </div>
    </div>
  )
}

export default SelectedProduct

SelectedProduct.propTypes = {
  type: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
}
