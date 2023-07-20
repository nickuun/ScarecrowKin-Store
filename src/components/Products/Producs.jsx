import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Products = ({addProductToCart, setCurrentProduct}) => {
    const [parent] = useAutoAnimate()
  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <br></br>
      <h1>Our Featured Products</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuProducts(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Alt Clothing</li>
          <li onClick={() => filter("conditioner")}>Jewellry</li>
          <li onClick={() => filter("foundation")}>Band Merch</li>
        </ul>

        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div  onClick={()=>{setCurrentProduct(product)}} className={css.product}>
              
                

              <img src={product.img} alt="" className="img" />
              <div className="left-s">
              <div className="name">
                  <span>{product.name}</span>
                </div>
                <span>R{product.price}</span>
                <button onClick={(e) =>{ e.stopPropagation();  addProductToCart(product)}}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
