import React, { useState, useEffect } from "react";
import css from "./Products.module.css";
import { getProductsData } from "../../data/products";
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Products = ({ addProductToCart, setCurrentProduct }) => {
  const [parent] = useAutoAnimate();
  const [MenuProducts, setMenuProducts] = useState([]);
  const [startProducts, setStartProducts] = useState([]);
  const [activeSubCategory, setActiveSubCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsData();
      setMenuProducts(products);
      setStartProducts(products);
    };

    fetchProducts();
  }, []);

  const filter = (SubCategory, isCategory = false) => {
    setActiveSubCategory(SubCategory);
    if (SubCategory === "All") {
      setMenuProducts(startProducts);
    } else if (isCategory) {
      setMenuProducts(startProducts.filter((product) => product.Category === SubCategory));
    } else {
      setMenuProducts(startProducts.filter((product) => product.SubCategory === SubCategory));
    }
  };

  const categories = startProducts.reduce((acc, product) => {
    const { Category, SubCategory } = product;
    if (!acc[Category]) {
      acc[Category] = new Set();
    }
    acc[Category].add(SubCategory);
    return acc;
  }, {});

  return (
    <div className={css.container}>
      <br />
      <h1>Product Catalogue</h1>
      <div className={css.products}>
        <ul className={css.menu}>
          <li className={activeSubCategory === "All" ? css.active : ""} onClick={() => filter("All")}>All</li>
          {Object.keys(categories).map((category) => (
            <React.Fragment key={category}>
              <li 
                style={{ textAlign: "center", fontSize:"14px"}} 
                className={activeSubCategory === category ? css.active : ""}
                onClick={() => filter(category, true)}
              >
                {category}
              </li>
              {[...categories[category]].map((subCategory) => (
                <li
                  key={subCategory}
                  className={activeSubCategory === subCategory ? css.active : ""}
                  onClick={() => filter(subCategory)}
                >
                  {subCategory}
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>

        <div className={css.list} ref={parent}>
          {MenuProducts.map((product, i) => (
            <div key={i} onClick={() => { setCurrentProduct(product) }} className={css.product}>
              <img style={{ textAlign: "left" }} src={product.img} alt={product.name} />
              <br></br>
              <div style={{ textAlign: "left" }} className="name">{product.name}</div>
              <br />
              <div style={{ fontWeight: "bold", fontSize: "20px" }} className="price">{product.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
