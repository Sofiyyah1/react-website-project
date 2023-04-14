import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-black.svg";

import "./footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col col-logo">
            <div class="logo">
              <img src={logo} alt="" />
            </div>
            <p>We'll build the future together. </p>
          </div>
          <div class="footer-col col-company">
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/carrers">Carrers</Link>
              </li>
              <li>
                <Link to="/our-clients">Our Clients</Link>
              </li>
              <li>
                <Link to="#">FAQs</Link>
              </li>
            </ul>
          </div>
          <div class="footer-col col-service">
            <h4>Service</h4>
            <ul>
              <li>
                <Link to="/who-we-are">Who We Are</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="#">Features</Link>
              </li>
            </ul>
          </div>

          <div class="footer-col col-newsletter">
            <h4>Sign up to our Newsletter</h4>
            <form className="footer-form">
              <i class="far fa-envelope"></i>
              <input type="email" name="email" placeholder="Enter your email" />
              <button class="btn">
                <i class="fas fa-arrow-circle-right"></i>
              </button>
            </form>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-discord"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i class="fab fa-google-plus-g"></i>
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p class="copyright">The Parthenon © 2022 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
