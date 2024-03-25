import React from "react";
import logo from "../../images/logo.png";
import "./footer.css";
import {
  Facebook_Icon,
  Instagram_Icon,
  Tiktok_Icon,
  Twitter_Icon,
} from "../icons";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-info">
        <img className="footer-logo" src={logo}></img>
        <p>© 2024 Rapidscore – All Rights Reserved</p>
      </div>
      <div className="social-wrapper">
        <p>Visit us</p>
        <Instagram_Icon fill={"#ddd"} />
        <Facebook_Icon fill={"#ddd"} />
        <Tiktok_Icon fill={"#ddd"} />
        <Twitter_Icon fill={"#ddd"} />
      </div>
    </div>
  );
};

export default Footer;
