import React from "react";
import { useState } from "react";

import logo from "../images/home/logo.png";
import cart from "../images/home/cart.png";

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <section className="navbar-bg">
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} className="logo"/>
            eCommerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse  ${show ? "show" : ""}}`}
            id="navbarSupportedContent">
            <ol className="navbar-nav ms-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Clothing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Mobile
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Footwear
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact Us
                </a>
              </li>
            </ol>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                Sign Up
              </button>
              <a href="/">
                <img src={cart} alt="shopping-cart" className="cart"/>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </section>
  );
}
