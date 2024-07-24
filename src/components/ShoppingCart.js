import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({ visibility, products, onProductRemove, onClose, onQuantityChange }) {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  function getCartTotal() {
    let cartTotal = 0;
    if (products) {
      for (let i = 0; i < products.length; i++) {
        const price = parseFloat(products[i].price.replace('R', ''));
        cartTotal += price * products[i].count;
      }
    }
    return cartTotal.toFixed(2);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    const emailParams = {
      name: name,
      email: email,
      products: products.map(product => `${product.name} (Size: ${product.selectedSize}) - ${product.count} x R${parseFloat(product.price.replace('R', ''))} = R${(parseFloat(product.price.replace('R', '')) * product.count).toFixed(2)}`).join("\n"),
      notes: notes,
    };

    emailjs.send('service_ou6mkyp', 'template_um36n0e', emailParams, '8qZo3bn4puLSOrHAm')
      .then((result) => {
        alert('Email sent successfully!');
        onClose();
      }, (error) => {
        alert('An error occurred, please try again', error.text);
      });
  };

  return (
    <div style={{
      display: visibility ? "block" : "none",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 1000,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div style={{
        backgroundColor: "#111",
        borderRadius: "10px",
        padding: "20px",
        width: "80%",
        maxWidth: "900px",
        color: "#FFF",
        margin: "auto",
        zIndex: 1001,
        position: "relative",
        maxHeight: "90%",  // Set max height
        overflowY: "auto",  // Enable vertical scroll
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #444",
          paddingBottom: "10px",
          marginBottom: "20px",
        }}>
          <h2>Shopping cart</h2>
          <div onClick={onClose}>
            <AiOutlineCloseCircle style={{ cursor: "pointer" }} size={30} />
          </div>
        </div>
        <div>
          {products.length === 0 && (
            <span>Your basket is currently empty</span>
          )}
          {products.map((product) => (
            <div key={product.id} style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
              backgroundColor: "#222",
              padding: "10px",
              borderRadius: "5px",
            }}>
              <img src={product.img} alt={product.name} style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "5px",
              }} />
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h3>{product.name}</h3>
                <p>Size: {product.selectedSize}</p>
                <span style={{ fontWeight: "bold" }}>R{(parseFloat(product.price.replace('R', '')) * product.count).toFixed(2)}</span>
              </div>
              <select
                value={product.count}
                onChange={(event) => onQuantityChange(product.id, parseInt(event.target.value))}
                style={{
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#333",
                  color: "#FFF",
                  border: "1px solid #555",
                  marginRight: "10px",
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
                onClick={() => onProductRemove(product)}
                style={{
                  backgroundColor: "#d9534f",
                  border: "none",
                  color: "#FFF",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                <RiDeleteBin6Line size={20} />
              </button>
            </div>
          ))}
          <h2>Total: R{getCartTotal()}</h2>
          {products.length > 0 && (
            <form ref={formRef} onSubmit={sendEmail} style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}>
              <label style={{ marginBottom: "5px" }}>Name</label>
              <input type="text" name="user_name" value={name} onChange={(e) => setName(e.target.value)} style={{
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #555",
                backgroundColor: "#222",
                color: "#FFF",
              }} />
              <label style={{ marginBottom: "5px" }}>Contact Information</label>
              <input  name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} style={{
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #555",
                backgroundColor: "#222",
                color: "#FFF",
              }} />
              <label style={{ marginBottom: "5px" }}>Message</label>
              <textarea name="message" value={notes} onChange={(e) => setNotes(e.target.value)} style={{
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #555",
                backgroundColor: "#222",
                color: "#FFF",
              }} />
              <input type="submit" value="Send" style={{
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                backgroundColor: "#5cb85c",
                color: "#FFF",
                cursor: "pointer",
              }} />
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
