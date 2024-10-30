import React, { useState } from "react";
import ProductAlbum from "../ProductAlbum/index";
import ProductDetails from "../SingleProductDetails/index";
import "./style.scss";

const SingleProduct = () => {
  const product = {
    name: "Asgaard Sofa",
    price: "250,000",
    description:
      "Setting the bar as one of the loudest speakers in its class...",
    colors: ["#5d47c5", "#d8b061", "#413a3a"],
    images: [
      "src/assets/sofa1.png",
      "src/assets/sofa2.png",
      "src/assets/sofa3.png",
      "src/assets/sofa4.png",
      "src/assets/sofa5.png",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div
      className="single-product"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <ProductAlbum images={product.images} onImageSelect={setSelectedImage} />

      <ProductDetails product={product} />
    </div>
  );
};

export default SingleProduct;
