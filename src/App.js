import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Producs";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import DrillDown from "./components/Products/Drilldown"
import Testimonials from "./components/Testimonials/Testimonials";
import React, { useState, useEffect } from "react";
import ShoppingCart from "./components/ShoppingCart";
import { FaShoppingCart } from "react-icons/fa";

function App() {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
   console.log("Current product changed: ", currentProduct)
  }, [currentProduct]);

  const [cartsVisibility, setCartVisible] = useState(false);

  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) ||[]
  );

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const addProductToCart = (product) => {
    const newProducts = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProducts]);
  };

  const onQuantityChange = (productID, count) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex((item) => item.id === productID);
      if (productsIndex != -1) {
        oldState[productsIndex].count = count;
      }
      return [...oldState];
    });
  };

  const onProductRemove = (product) => {
    setProducts((oldState) => {
      const productsIndex = oldState.findIndex(
        (item) => item.id === product.id
      );
      if (productsIndex != -1) {
        oldState.splice(productsIndex, 1);
      }
      return [...oldState];
    });
  };
  return (
    <div className="App">
      {console.log("CUrrent product is: ", currentProduct)}
      {currentProduct ? <DrillDown currentProduct={currentProduct} setCurrentProduct={setCurrentProduct}></DrillDown> : ""}
      <ShoppingCart
        visibility={cartsVisibility}
        products={productsInCart}
        onClose={() => setCartVisible(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <Header setCartVisible={setCartVisible} productsInCart={productsInCart} />

      <Hero />
      <Slider setCurrentProduct={setCurrentProduct} addProductToCart={addProductToCart} />
      <Products setCurrentProduct={setCurrentProduct} addProductToCart={addProductToCart} />

      <Footer setCartVisible={setCartVisible} productsInCart={productsInCart} />
      
    </div>
  );
}

export default App;
