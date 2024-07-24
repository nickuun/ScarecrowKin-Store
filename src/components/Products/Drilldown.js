import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Carousel from "../Carousel/Carousel";
import "./Drilldown.css";

const Drilldown = ({ currentProduct, setCurrentProduct, addProductToCart }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const images = currentProduct.images;
  const totalStock = currentProduct.sizeOptions.find(option => option.size === 'total')?.value || 0;

  return (
    <div className="modal">
      <div className="drilldown">
        <div className="header">
          <h2>{`${currentProduct.Category} / ${currentProduct.SubCategory} / ${currentProduct.name}`}</h2>
          <AiOutlineCloseCircle style={{ cursor: "pointer" }} onClick={() => setCurrentProduct(null)} size={30} />
        </div>
        <div className="container">
          <div className="item">
            <Carousel images={images} />
          </div>
          <div className="details">
            <div style={{ fontSize: "24px", fontWeight: "bold"}} className="description">{currentProduct.description}</div>
            <h1 style={{ color: "#FFFFFF" }}>{currentProduct.price}</h1>
            <div className="sizes">
              <div>Total in stock: {totalStock}</div>
              <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
                {currentProduct.sizeOptions.map((option, index) => (
                  option.size !== 'total' && (
                    <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <button
                        style={{
                          backgroundColor: selectedSize === option.size ? "#4CAF50" : "white",
                          border: "1px solid #ccc",
                          borderRadius: "5px",
                          padding: "10px 20px",
                          cursor: "pointer",
                          margin: "5px",
                          transition: "background-color 0.3s, border-color 0.3s",
                        }}
                        onClick={() => setSelectedSize(option.size)}
                      >
                        {option.size}
                      </button>
                      {selectedSize === option.size && option.value === '0' && (
                        <div style={{ marginTop: "5px", fontSize: "12px", color: "red" }}>
                          Potentially unavailable
                        </div>
                      )}
                    </div>
                  )
                ))}
              </div>
            </div>
            <button
              className="add-to-cart-btn"
              disabled={!selectedSize}
              onClick={() => {
                if (selectedSize) {
                  const productToAdd = {
                    ...currentProduct,
                    selectedSize: selectedSize,
                    price: currentProduct.price,
                  };
                  addProductToCart(productToAdd);
                }
              }}
            >
              {selectedSize ? "Add to Cart" : "Please Select Size"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drilldown;
