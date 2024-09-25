// SingleProductPage.js
import React, { useState } from "react";
import ProductAlbum from "../ProductAlbum/index";
import ProductDetails from "../SingleProductDetails/index";
import "./style.scss";

const SingleProductPage = () => {
  const product = {
    name: "Asgaard Sofa",
    price: "250,000",
    description:
      "Setting the bar as one of the loudest speakers in its class...",
    colors: ["#5d47c5", "#d8b061", "#413a3a"],
    images: [
      "public/Furniture/Asgaard-sofa.svg",
      "public/Furniture/Outdoor-sofa.svg",
      "public/Furniture/Outdoor-sofa-2.svg",
      "public/Furniture/Stuart-sofa.svg",
      "public/Furniture/Maya-sofa.svg",
    ],
  };

  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div
      className="single-product-page"
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <ProductAlbum images={product.images} onImageSelect={setSelectedImage} />
      <img
        src={selectedImage}
        alt="Selected product"
        style={{
          width: "400px",
          marginRight: "20px",
          backgroundColor: "#fcf8f3",
        }}
      />
      <ProductDetails product={product} />
    </div>
  );
};

export default SingleProductPage;
