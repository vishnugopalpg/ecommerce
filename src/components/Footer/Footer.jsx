import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Children</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>

        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>

          <span>COokies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>SAmple text message</span>
        </div>

        <div className="item">
          <h1>Contact</h1>
          <span>Sample contact message</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Store</span>
          <span className="copyright">
            Copyright symbol and the text message
          </span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
