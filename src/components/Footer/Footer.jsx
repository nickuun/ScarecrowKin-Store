import React from "react";
import Logo from "../../assets/logo.png";
import { CgInstagram } from "react-icons/cg";
import { FiFacebook } from "react-icons/fi";
import { PiTiktokLogoBold } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";

import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
import css from "./Footer.module.css";

const Footer = ({ setCartVisible }) => {
  return (
    <div>
      <div className={css.cFooter}>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Pages</span>
            <span className={css.pngLine}>
              <BiInfoCircle size={25} />
              <span>About</span>
            </span>
            <span className={css.pngLine}>
              <AiOutlineShoppingCart
                size={25}
                onClick={() => setCartVisible(true)}
              />
              <span onClick={() => setCartVisible(true)}>Cart</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Socials</span>
            <a
              className={css.pngLine}
              href="https://www.facebook.com/profile.php?id=100087123284418"
              target="_blank"
              rel="noreferrer"
            >
              <FiFacebook size={25} />
              <a
                className={css.pngLine}
                href="https://www.facebook.com/profile.php?id=100087123284418"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </a>
            <a
                className={css.pngLine}
                href="https://www.instagram.com/scarecrow.kin"
                target="_blank"
                rel="noreferrer"
              >
              <CgInstagram size={23} />
              <a
                className={css.pngLine}
                href="https://www.instagram.com/scarecrow.kin"
                target="_blank"
                rel="noreferrer"
              >Instagram</a>
            </a>
            <a
              className={css.pngLine}
              href="https://www.tiktok.com/@scarecrowkin"
              target="_blank"
              rel="noreferrer"
            >
              <PiTiktokLogoBold size={25} />
              <a
              className={css.pngLine}
              href="https://www.tiktok.com/@scarecrowkin"
              target="_blank"
              rel="noreferrer"
            >
                TikTok
              </a>
            </a>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon} />
              <span>+27 68 476 0755</span>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <span>scarecrowkin@gmail.com</span>
            </span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>Durbanville, Cape Town, 7550</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
