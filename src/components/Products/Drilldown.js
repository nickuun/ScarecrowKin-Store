import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./Drilldown.css";

const Drilldown = ({ currentProduct, setCurrentProduct }) => {
  console.log("currentProduct: ",currentProduct)

  return (
    <div className="modal">
      <div className="drilldown">
        <div className="header">
          {" "}
          <h2>{currentProduct.name}</h2> <AiOutlineCloseCircle onClick={()=>{setCurrentProduct(null)}} size={30} />
        </div>
        <div className="container">
          <div className="item">
            <img className="image" src={currentProduct.img} />
          </div>
          <div className="item">
            <div>{currentProduct.type}</div>
            <div>
                  {currentProduct.detail}</div>
            <h1 style={{ color: "#FFFFFF" }}>R{currentProduct.price}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Drilldown;
