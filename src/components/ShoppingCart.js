import React from "react";
import "./ShoppingCart.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {

  function getCartTotal () {
    let cartTotal = 0
    if (products){
      for (let i = 0; i < products.length; i++) {
        cartTotal += (products[i].price * products[i].count)
      }
    }
    return cartTotal
  }

  return (
    <div className="modal" style={{ display: visibility ? "block" : "none" }}>
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping cart</h2>
          <div onClick={onClose}>
             <AiOutlineCloseCircle size={30} />
          </div>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span>Your basket is curerently empty</span>
          )}
          {console.log(products)}
          {products.map((product) => (
            <div className="cart-product" key={product.id}>
              <img src={product.img} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <span className="product-price">
                  ${product.price * product.count}
                </span>
              </div>
              <select
                className="count"
                value={product.count}
                onChange={(event) => {
                  onQuantityChange(product.id, event.target.value);
                }}
              >
                {[...Array(10).keys()].map((number) => {
                  const num = number + 1;
                  return (
                    <option value={num} key={num}>
                      {num}
                    </option>
                  );
                })}
              </select>
              <button
                className="btn remove-btn"
                onClick={() => onProductRemove(product)}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          <h2>Total: {getCartTotal()}</h2>
          {products.length > 0 && (
            <button className="btn checkout-btn">Proceed to Checkout</button>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
