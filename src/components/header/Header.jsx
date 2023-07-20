import React,{useState} from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo.png";
import { CgShoppingBag } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { CgInstagram } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogoBold } from "react-icons/pi";

const Header = ({setCartVisible}, productsInCart) => {
  const [ShowMenu, setShowMenu] = useState(true)

    const toggleMenu = () => {
        setShowMenu((ShowMenu)=>!ShowMenu)
    }

  return (
    <div className={css.container}>
      <div className={css.logo}>
      <a 
              className={css.pngLine}
              href="https://www.facebook.com/profile.php?id=100087123284418"
              target="_blank"
              rel="noreferrer"
            ><FiFacebook size={25} /></a>
            <a
                className={css.pngLine}
                href="https://www.instagram.com/scarecrow.kin"
                target="_blank"
                rel="noreferrer"
              >
              <CgInstagram size={23} /></a>
              <a
              className={css.pngLine}
              href="https://www.tiktok.com/@scarecrowkin"
              target="_blank"
              rel="noreferrer"
            >
              <PiTiktokLogoBold size={25} />
              </a>
      </div>

     

      <div className={css.right}>

      {/* <div className={css.bars} onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div> */}

        
          {/* <ul className={css.menu}
          style ={{display: ShowMenu? 'inherit': 'none'}}>
             */}
            <div>Your Cart:</div>
          {/* </ul> */}
      

        {/* /*<input type="text" className={css.search} placeholder="Search" /> */}

        
        <AiOutlineShoppingCart classname={css.cart}  size={25}  onClick={() => setCartVisible(true)}/>
        {productsInCart.length > 0 && (
          <span className="product-count">{productsInCart.length}</span>
        )}
        
      </div>
    </div>
  );
};

export default Header;
