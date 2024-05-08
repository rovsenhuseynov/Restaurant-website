import React from "react";
import "./OurStory.scss";
import image_20 from "../../../assets/image/restoran/R.webp";
import { NavLink } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="ourStory next-section">
      <div className="ourStory__container">
        <div className="ourStory__text">
          <div className="ourStory__logo">
            <div className="ourStory__logo-title">Discover</div>
            <div className="ourStory__logo-subtitle">OUR STORY</div>
          </div>

          <div className="decorative-divider">✻</div>
          <div className="ourStory__text-p">
            "Best Food in Azerbaijan" is a restaurant and cafe located on the
            busy corner of Yashyl Bazaar in Narimanov. With a glazed facade on
            both sides of the building, overlooking the market and the busy
            intersection of Baku.
          </div>
          <NavLink to="/about" className="link-to">
            About Us
          </NavLink>
        </div>

        <img
          src={image_20}
          alt="restaurant img"
          className="ourStory__img"
        ></img>
      </div>
    </div>
  );
};

export default OurStory;
