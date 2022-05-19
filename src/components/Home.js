import React from "react";

// Importing Components
import Navbar from "./Navbar";
import Footer from "./Footer";

//  Importing Images
import Clothing from "../images/home/Categories/Clothing.jpg";
import Mobile from "../images/home/Categories/Mobile.jpg";
import Footwear from "../images/home/Categories/Footwear.jpg";
import Books from "../images/home/Categories/Books.jpg";
import Electronics from "../images/home/Categories/Electronics.jpg";
import Appliances from "../images/home/Categories/Appliances.jpg";
import Accessories from "../images/home/Categories/Accessories.jpg";

import Sale1 from "../images/home/Sale Offers/Sale1.jpg";
import Sale2 from "../images/home/Sale Offers/Sale2.jpg";
import Sale3 from "../images/home/Sale Offers/Sale3.jpg";
import Sale4 from "../images/home/Sale Offers/Sale4.jpg";
import Sale5 from "../images/home/Sale Offers/Sale5.jpg";
import Sale6 from "../images/home/Sale Offers/Sale6.jpg";
import Sale7 from "../images/home/Sale Offers/Sale7.jpg";

import Recent1 from "../images/home/RecentlyAdded/Recent1.jpg";
import Recent2 from "../images/home/RecentlyAdded/Recent2.jpg";
import Recent3 from "../images/home/RecentlyAdded/Recent3.jpg";
import Recent4 from "../images/home/RecentlyAdded/Recent4.jpg";
import Recent5 from "../images/home/RecentlyAdded/Recent5.jpg";
import Recent6 from "../images/home/RecentlyAdded/Recent6.jpg";
import Recent7 from "../images/home/RecentlyAdded/Recent7.jpg";

export default function Home() {
  return (
    <div className="App">
      <Navbar />

      <div>
        <div className="categories my-4">
          <h2 className="heading">Categories</h2>

          <div className="category-box">
            <div className="category-item">
              <a href="/">
                <img src={Clothing} alt="Category1" className="category1"/>
                <div className="content">
                  <h4>Clothing</h4>
                </div>
              </a>
            </div>
            <div className="category-item">
              <a href="/">
                <img src={Mobile} alt="Category2" />
                <div className="content">
                  <h4>Mobile</h4>
                </div>
              </a>
            </div>
            <div className="category-item">
              <a href="/">
                <img src={Footwear} alt="Category3" />
                <div className="content">
                  <h4>Footwear</h4>
                </div>
              </a>
            </div>
            <div className="category-item">
              <a href="/">
                <img src={Books} alt="Category4" />
                <div className="content">
                  <h4>Books</h4>
                </div>
              </a>
            </div>
            <div className="category-item">
              <a href="/">
                <img src={Electronics} alt="Category5" />
                <div className="content">
                  <h4>Electronics</h4>
                </div>
              </a>
            </div>
            <div className="category-item">
              <a href="/">
                <img src={Appliances} alt="Category6" />
                <div className="content">
                  <h4>Appliances</h4>
                </div>
              </a>
            </div>
            <div className="category-item">
              <a href="/">
                <img src={Accessories} alt="Category7" />
                <div className="content">
                  <h4>Accessories</h4>
                </div>
              </a>
            </div>
          </div>

          {/* <button className="btn">More</button> */}
        </div>

        <div className="sale-offers my-4">
          <h2 className="heading">Sale Offers</h2>

          <div className="sales">
            <div className="sale-item">
              <a href="/">
                <img src={Sale1} alt="Sale1" />
              </a>
            </div>
            <div className="sale-item">
              <a href="/">
                <img src={Sale2} alt="Sale2" />
              </a>
            </div>
            <div className="sale-item">
              <a href="/">
                <img src={Sale3} alt="Sale3" />
              </a>
            </div>
            <div className="sale-item">
              <a href="/">
                <img src={Sale4} alt="Sale4" />
              </a>
            </div>
            <div className="sale-item">
              <a href="/">
                <img src={Sale5} alt="Sale5" />
              </a>
            </div>
            <div className="sale-item">
              <a href="/">
                <img src={Sale6} alt="Sale6" />
              </a>
            </div>
            <div className="sale-item">
              <a href="/">
                <img src={Sale7} alt="Sale7" />
              </a>
            </div>
          </div>

          {/* <button className="btn">More</button> */}
        </div>

        <div className="recently-added my-4">
          <h2 className="heading">Recently Added</h2>

          <div className="recents">
            <div className="recent-item">
              <a href="/">
                <img src={Recent1} alt="Recent1" />
              </a>
            </div>
            <div className="recent-item">
              <a href="/">
                <img src={Recent2} alt="Recent2" />
              </a>
            </div>
            <div className="recent-item">
              <a href="/">
                <img src={Recent3} alt="Recent3" />
              </a>
            </div>
            <div className="recent-item">
              <a href="/">
                <img src={Recent4} alt="Recent4" />
              </a>
            </div>
            <div className="recent-item">
              <a href="/">
                <img src={Recent5} alt="Recent5" />
              </a>
            </div>
            <div className="recent-item">
              <a href="/">
                <img src={Recent6} alt="Recent6" />
              </a>
            </div>
            <div className="recent-item">
              <a href="/">
                <img src={Recent7} alt="Recent7" />
              </a>
            </div>
          </div>

          {/* <button className="btn">More</button> */}
        </div>
      </div>

      <Footer />
    </div>
  );
}
