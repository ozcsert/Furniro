import "./style.scss"
import PropTypes from "prop-types"
import CloseImg from "../../assets/icons/close-icon.svg"
import LineImg from "../../assets/images/line.svg"
import SelectedProduct from "./SelectedProduct"
import { useEffect, useState } from "react"

const Dropdown = ({ type, closeModal }) => {
  const [totalPrice, setTotalPrice] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sofa",
      description: "Comfortable 3-seater sofa with modern design.",
      price: 999.99,
      material: "Fabric",
      dimensions: "200x90x85 cm",
    },
    {
      id: 2,
      name: "Chair",
      description: "Ergonomic office chair.",
      price: 299.99,
      material: "Leather",
      dimensions: "60x60x90 cm",
    },
    {
      id: 2,
      name: "Chair",
      description: "Ergonomic office chair.",
      price: 299.99,
      material: "Leather",
      dimensions: "60x60x90 cm",
    },
    {
      id: 2,
      name: "Chair",
      description: "Ergonomic office chair.",
      price: 299.99,
      material: "Leather",
      dimensions: "60x60x90 cm",
    },
    {
      id: 2,
      name: "Chair",
      description: "Ergonomic office chair.",
      price: 299.99,
      material: "Leather",
      dimensions: "60x60x90 cm",
    },
    {
      id: 3,
      name: "Table",
      description: "Stylish dining table.",
      price: 499.99,
      material: "Wood",
      dimensions: "150x90x75 cm",
    },
  ])

  let modalContent = {}

  useEffect(() => {
    const calculateTotalPrice = (products) => {
      return products.reduce((total, product) => total + product.price, 0)
    }

    const newTotalPrice = calculateTotalPrice(products)
    setTotalPrice(newTotalPrice)
  }, [products])

  //BU products alttaki switch icerisinde eger "Cart" ise local storage
  //icerisinden cart itemleri ile populate edilecek. "Wishlist" icinde
  //storage'dan "wishlist" itemleri ile populate edilecek/ Bu fonksiyonlar
  //switch icerisinde yazilacaklar.

  switch (type) {
    case "Cart":
      modalContent = {
        title: "Shopping Cart",
        buttons: ["Cart", "Checkbox", "Comparison"],
        subtotal: ["Subtotal", totalPrice],
      }
      break
    case "Wishlist":
      modalContent = {
        title: "Wishlist",
      }
  }

  const deleteProductHandler = () => {
    console.log("product deleted")
    //local storage'dan veya api den silme func
  }

  return (
    <div>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{modalContent.title}</h5>
          <div className="close-img-box">
            <img
              className="close-img"
              src={CloseImg}
              alt=""
              onClick={closeModal}
            />
          </div>
        </div>

        <div className="line-box">
          <img className="line-img" src={LineImg} alt="" />
        </div>
        <div className="modal-products-container">
          {products.map((product, key) => (
            <SelectedProduct
              key={key}
              type={type}
              product={product}
              deleteProduct={deleteProductHandler}
            />
          ))}
        </div>
        <div className="modal-footer">
          {modalContent.subtotal && (
            <div className="subtotal-container">
              <p>{modalContent.subtotal[0]}</p>
              <p className="price">{totalPrice}</p>
            </div>
          )}
          <div className="line-box">
            <img className="line-img" src={LineImg} alt="" />
          </div>
          {modalContent.buttons && (
            <div className="modal-btns">
              {modalContent.buttons.map((button, index) => (
                <button key={index} className="modal-btn">
                  {button}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dropdown

Dropdown.propTypes = {
  type: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
}
