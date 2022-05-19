import React from "react";

//  Importing Images 
import instagram from "../flaticons/instagram.png";
import facebook from "../flaticons/facebook.png";
import google from "../flaticons/google.png";
import whatsapp from "../flaticons/whatsapp.png";

export default function Footer() {
    return (
        <footer>
        <div className="container">
          <h3 className="text-center my-4">Site Links</h3>

          <div className="lists">
            <ul className="list">
              <li>
                <a className="nav-item" href="/">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  About Us
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Products
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Blogs
                </a>
              </li>
            </ul>
            <ul className="list">
              <li>
                <a className="nav-item" href="/">
                  Promotions
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Partners
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  Careers
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div className="social-media-links">
            <ul className="list">
              <li>
                <a className="nav-item" href="/">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  <img src={facebook} alt="instagram" />
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  <img src={google} alt="instagram" />
                </a>
              </li>
              <li>
                <a className="nav-item" href="/">
                  <img src={whatsapp} alt="instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )
}