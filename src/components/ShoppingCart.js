import React, {useRef, useState } from "react";
import "./ShoppingCart.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import emailjs from 'emailjs-com';

function ShoppingCart({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [form, setForm] = useState("");
  const [notes, setNotes] = useState("");

  function getCartTotal() {
    let cartTotal = 0;
    if (products) {
      for (let i = 0; i < products.length; i++) {
        cartTotal += products[i].price * products[i].count;
      }
    }
    return cartTotal;
  }

  const sendEmail = (e) => {
    
    e.preventDefault();

    const cartItems = products
      .map((product) => `${product.name} x ${product.count}`)
      .join("\n");

    const emailParams = {
      name: name,
      products: cartItems,
      notes: notes
    };

    emailjs
      .send(
        'service_bblbh4c',
        'template_um36n0e',
        emailParams,
        '8qZo3bn4puLSOrHAm'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
        },
        (error) => {
          console.log('Failed to send email:', error.text);
        }
      );
  };

  return (
    <div className="modal" style={{ display: visibility ? "block" : "none" }}>
      <div className="shoppingCart">
        <div className="header">
          <h2>Shopping cart</h2>
          <div onClick={onClose}>
            <AiOutlineCloseCircle style={{ cursor: "pointer" }} size={30} />
          </div>
        </div>
        <div className="cart-products">
          {products.length === 0 && (
            <span>Your basket is curerently empty</span>
          )}
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
             <form ref={formRef} onSubmit={sendEmail}>
             <label>Name</label>
             <input type="text" name="user_name" />
             <label>Email</label>
             <input type="email" name="user_email" />
             <label>Message</label>
             <textarea name="message" />
             <input type="submit" value="Send" />
           </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
