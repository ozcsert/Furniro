// ProductCard/index.jsx
import StarRating from "../../StarRating/StarRating"
import PropTypes from "prop-types"
import "./style.scss"
import { useState } from "react"
import Wishlist from "../../../assets/Product/wishlist-black.svg?react"
import Detail from "../../../assets/Product/detail-group-empty.svg?react"
import Cart from "../../../assets/Product/cart-empty.svg?react"
import { useNavigate } from "react-router-dom"

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  const [colors, setColors] = useState({
    wishlist: "transparent",
    detail: "transparent",
    cart: "transparent",
  })

  const handleWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    const existingItem = wishlist.find((item) => item.id === product.id)

    if (!existingItem) {
      wishlist.push(product)
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
      setColors((prev) => ({ ...prev, wishlist: "red" }))
    } else {
      const updatedWishlist = wishlist.filter((item) => item.id !== product.id)
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
      setColors((prev) => ({ ...prev, wishlist: "transparent" }))
    }
  }

  const handleCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingItem = cart.find((item) => item.id === product.id)

    if (!existingItem) {
      cart.push({ ...product, quantity: 1 })
      localStorage.setItem("cart", JSON.stringify(cart))
      setColors((prev) => ({ ...prev, cart: "red" }))
    } else {
      const updatedCart = cart.filter((item) => item.id !== product.id)
      localStorage.setItem("cart", JSON.stringify(updatedCart))
      setColors((prev) => ({ ...prev, cart: "transparent" }))
    }
  }

  const handleDetail = (productId) => {
    navigate(`/product/${productId}`)
  }

  const toggleColor = (icon) => {
    setColors((prevColors) => ({
      ...prevColors,
      [icon]: prevColors[icon] === "transparent" ? "red" : "transparent",
    }))
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-control">
          <Wishlist
            onClick={() => {
              toggleColor("wishlist")
              handleWishlist(product)
            }}
            style={{
              fill: colors.wishlist,
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
          />
          <Detail
            onClick={() => {
              toggleColor("detail")
              handleDetail(product.id)
            }}
            style={{
              fill: colors.detail,
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
          />
          <Cart
            onClick={() => {
              toggleColor("cart")
              handleCart(product)
            }}
            style={{
              fill: colors.cart,
              cursor: "pointer",
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
        <div className="products-discount">
          {product.discount ? (
            <p className="new-discount ">{product.discount}%</p>
          ) : (
            <p className="new-label">NEW</p>
          )}
        </div>
      </div>
      <h2 className="product-name">{product.name}</h2>
      <p className="product-info">{product["short-description"]}</p>
      <StarRating rating={product.rating} />
      <div className="product-price">
        <span className="discounted-price">${product.price}</span>
        <span className="original-price">${product.originalPrice}</span>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
}

export default ProductCard
