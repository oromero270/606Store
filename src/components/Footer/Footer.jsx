import React from "react";
import "./footer.css";
import { BsInstagram } from "react-icons/bs";
import { BsSpotify } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Zaeed
      </a>

      <ul className="permalinks">
        <li>
          <a href="https://zaeed.netlify.app/">Home</a>
        </li>
        <li>
          <a href="https://zaeed.netlify.app/#about">About</a>
        </li>
        <li>
          <a href="https://zaeed.netlify.app/#perfs">Performances</a>
        </li>
        <li>
          <a href="https://zaeed.netlify.app/#calander">Calander</a>
        </li>
        <li>
          <a href="https://zaeed.netlify.app/#merch">Merchandise</a>
        </li>
        <li>
          <a href="https://zaeed.netlify.app/#music">Music</a>
        </li>
        <li>
          <a href="#https://zaeed.netlify.app/#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/zaeedhnpr/" target="_blank">
          <BsInstagram />
        </a>
        <a
          href="https://open.spotify.com/artist/6oKe9ykerZRf9ghCORfjbQ?si=RYwIVaDKS8mdwv3pLAfTjw"
          target="_blank"
        >
          <BsSpotify />
        </a>
        <a
          href="https://www.youtube.com/channel/UCVwm964aZ-wWgQ9V0NKcrcw/featured"
          target="_blank"
        >
          <BsYoutube />
        </a>
        <a
          href="https://www.facebook.com/Zaeed-110399764811848"
          target="_blank"
        >
          <BsFacebook />
        </a>
      </div>
      <div className="footer__copyrights">
        <small>&copy; Zaeed Official. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
