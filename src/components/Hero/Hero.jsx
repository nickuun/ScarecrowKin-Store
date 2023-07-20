import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { AiFillShopping } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Hero = () => {
  return (
    <div className={css.container}>
      {/*left side */}
      <div className={css.h_side}>
        <span className={css.text1}><img src={HeroImg} alt="" width={600} /></span>

        
     
      
      </div>
    </div>
  );
};

export default Hero;
