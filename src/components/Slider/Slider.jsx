import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { SliderProducts } from "../../data/products";

const Slider = ({addProductToCart, setCurrentProduct}) => {
  return (
    <h1>HI</h1>
    // <div className="s-container">
    //   <h1 className="sliderTitle">Newest Products</h1>
    //   <Swiper
    //     navigation={true}
    //     modules={[Navigation]}
    //     className="mySwiper"
    //     loopFillGroupWithBlack={true}
    //     slidesPerView={3}
    //     spaceBetween={40}
    //     slidesPerGroup={1}
    //     loop={false}
    //   >
    //     {SliderProducts.map((slide, i) => (
    //       <SwiperSlide >
    //       <div onClick={()=>{setCurrentProduct(slide)}}>
            
    //         <div  className="left-s">
    //           <div className="name">
    //             <span>{slide.name}</span>
    //             <span>{slide.detalis}</span>
    //           </div>
    //           <span>R{slide.price}</span>
    //           <div onClick={(e) =>{ e.stopPropagation();  addProductToCart(slide)}}>Add to Cart</div>
    //         </div>

    //         <img src={slide.img} alt="product" className="img-p" /></div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};

export default Slider;
