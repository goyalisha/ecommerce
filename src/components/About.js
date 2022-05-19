import React from "react";

//  Importing Images 
import aboutUs1 from "../aboutUs1.jpg";
import aboutUs2 from "../aboutUs2.png";

// Importing Components
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="heading my-4 text-center">About Us</h1>
        <p className="description text-center">
          We Will is an application which is built for providing platform to
          handmade arts. We Will application includes all the arts which are
          handmade. We Will is started with aim of connecting all the handmade
          arts at one place which will make easier for people when it comes to
          buying products.
        </p>
        <p className="description text-center">
          We Will is an application which is launched with the desire of making
          people life easier. Rather than visiting different websites across the
          social media platforms for buying different handmade arts, you can
          find all the handmade arts at one platform that is " we will ". The
          secondary aim of our application is the make people aware about the
          different arts. When people checks in into our app to buy any prouduct
          , they will see different blocks of handmade arts which in turn will
          let them know about the variety of handmade arts. Our community is
          also here to provide platform to those who lacks knowledge of selling
          products online. We guide every individual who makes handmade arts. We
          elaborate them in all possible ways so that they can make their sales
          higher by selling their product online.
        </p>
      </div>

      <div className="images">
        <img src={aboutUs1} alt="business" className="business" />
        <img src={aboutUs2} alt="location" className="location" />
      </div>

      <div className="container">
        <h2 className="sub-heading text-center my-4">Terms and conditions</h2>
        <ol>
          <li>
            Hereby you are paying 500 rs per category for your category
            registration.
          </li>
          <li>
            You are aware that we will be taking 10% margin from your product
            price.
          </li>
          <li>
            It is your (purveyor) responsibility to tell me about the product
            images you gave me if you cannot make same products[in case same
            material is not available then].You are suppose to tell me about
            that in advance or else it will come under your responsibility when
            customer orders your product and you cannot give them that same
            product.
          </li>
          <li>
            The images you have given to me are of handmade arts and all those
            images belongs to you. If you upload images from sites or images of
            arts of other people without asking them, then it is against the
            rights and it will be your responsibility if you do so.
          </li>
        </ol>
      </div>

      <Footer />
    </>
  );
}
