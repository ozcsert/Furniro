import React, { useState } from "react";
import "./style.scss";

const ProductAlbum = ({ images, onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    onImageSelect(image);
  };

  return (
    <div className="product-album">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`product view ${index}`}
          onClick={() => handleImageClick(image)}
          className="thumbnail"
          style={{
            cursor: "pointer",
            marginBottom: "10px",
          }}
        />
      ))}
    </div>
  );
};

export default ProductAlbum;
