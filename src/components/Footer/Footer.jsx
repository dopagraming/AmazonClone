import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import Facebook from "../../images/facebook.png";
import Instagram from "../../images/instagram.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-row">
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Compressions</a>
            </li>
            <li>
              <a href="#">Customers</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Explore</h4>
          <ul class="links">
            <li>
              <a href="#">Free Designs</a>
            </li>
            <li>
              <a href="#">Latest Designs</a>
            </li>
            <li>
              <a href="#">Themes</a>
            </li>
            <li>
              <a href="#">Popular Designs</a>
            </li>
            <li>
              <a href="#">Art Skills</a>
            </li>
            <li>
              <a href="#">New Uploads</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul class="links">
            <li>
              <a href="#">Customer Agreement</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">GDPR</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Media Kit</a>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose of news, updates,
            helpful tips, and exclusive offers.
          </p>
          {/* <for action="#">
            <input type="text" placeholder="Your email" required>
            <button type="submit">SUBSCRIBE</button>
          </form> */}
          <div class="icons">
            <img src={Github} alt="" />
            <img src={Facebook} alt="" />

            <img src={Instagram} alt="" />
            <img src={Linkedin} alt="" />
          </div>
        </div>
      </div>
      <p className="My">This Website Created by ABDELRAHMAN 2024</p>
    </footer>
  );
};

export default Footer;
