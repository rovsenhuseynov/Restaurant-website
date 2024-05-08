import React from "react";
import "./about.scss";
import Varied_menu from "../../assets/svg/Menu/Varied_menu.svg";
import Fresh from "../../assets/svg/fresh/fresh_2.svg";
import fast_service from "../../assets/svg/fast_service/fast_service.png.svg";
import "../../assets/globalStyles.scss";
import { Link } from "react-router-dom";
import ScrollDownButton from "../../Components/reusableComponents/ScrollDownButton/ScrollDownButton";
import ScrollToTopButton from "../../Components/reusableComponents/ScrollToTopButton/ScrollToTopButton";
import Chef from "../../assets/image/Chef.svg";
import PhotoGallery from "./photoGalry/PhotoGallery";
import Intermediate from "./intermediate/Intermediate";

const About = () => {
  return (
    <div className="about__wrapper">
      <div className="about__banner">
        <div className="about__banner-content">
          <h1 className="about__banner-title">Food Website</h1>
          <p className="about__banner-subtext">Best Food In Azerbaijan</p>
          <Link to="/menu" className="about__banner-link">
            <button className="link__btn">ORDER NOW</button>
          </Link>
        </div>
        <ScrollDownButton targetSelector=".next-section" />
      </div>
      {/* Важный класс 'next-section'  для прокрутки к следующему разделу */}
      <div className="about__content next-section">
        <div className="about__welcome-block">
          <h1 className="about__welcome-block-title">
            Welcome to the “Azerbaijani Cuisine” restaurant!
          </h1>
          <ul className="about__welcome-block-subtitle-list">
            <li className="about__welcome-block-subtitle-list-elem">
              We have everything to make your visit to our restaurant
              unforgettable.
            </li>
            <li className="about__welcome-block-subtitle-list-elem">
              A unique place where great taste and cozy atmosphere meet.
            </li>
          </ul>
        </div>

        <div className="lists_benefits">
          <div className="about">
            <div className="about__title-block">
              <img src={Varied_menu} alt="Fresh" className="about__title-svg" />
              <h3 className="about__title">Varied menu:</h3>
            </div>
            <ul className="about__list">
              <li className="about__list-elem">
                Juicy and tender steaks for meat lovers.
              </li>
              <li className="about__list-elem">
                Signature pastas prepared with love and sophistication.
              </li>
              <li className="about__list-elem">
                Fresh salads filled with vitamins and bright taste.
              </li>
              <li className="about__list-elem">
                Author's desserts that will melt your heart.
              </li>
            </ul>
          </div>

          <div className="about ">
            <div className="about__title-block">
              <img src={Fresh} alt="Fresh" className="about__title-svg" />
              <h3 className="about__title">Fresh bar:</h3>
            </div>

            <ul className="about__list">
              <li className="about__list-elem">
                Wide selection of freshly squeezed juices, full of nutrients.
              </li>
              <li className="about__list-elem">
                Green smoothies, nutritious and refreshing.
              </li>
              <li className="about__list-elem">
                Fragrant coffee from selected beans.
              </li>
            </ul>
          </div>

          <div className="about">
            <div className="about__title-block">
              <img
                src={fast_service}
                alt="Fresh"
                className="about__title-svg"
              />
              <h3 className="about__title">Fast service and convenience:</h3>
            </div>
            <ul className="about__list">
              <li className="about__list-elem">
                Our friendly and professional staff is always ready to pamper
                you with attention and responsiveness.
              </li>
              <li className="about__list-elem">
                Green smoothies, nutritious and refreshing.
              </li>
              <li className="about__list-elem">
                Fast service will allow you to enjoy a delicious meal without
                much waiting.
              </li>
            </ul>
          </div>
        </div>

        <div className="reasons-choice">
          <h3 className="reasons-choice__title">But that is not all!</h3>
          <h4 className="reasons-choice__subtitle">
            Here are some reasons why Best Food in Azerbaijan is your ideal
            choice:
          </h4>

          <div className="reasons-choice__contecst-block">
            <ul className="reasons-choice__list">
              <li className="reasons-choice__list-element">
                <span className="reasons-choice__list-element-title">
                  Cozy atmosphere.
                </span>
                <p className="reasons-choice__list-element-text">
                  Our spacious halls and stylish interior create the perfect
                  atmosphere for meeting with friends or business partners.
                </p>
              </li>

              <li className="reasons-choice__list-element">
                <span className="reasons-choice__list-element-title">
                  High quality.
                </span>
                <p className="reasons-choice__list-element-text">
                  We use only fresh and natural ingredients to ensure that every
                  dish is exceptional in taste and nutrition.
                </p>
              </li>

              <li className="reasons-choice__list-element">
                <span className="reasons-choice__list-element-title">
                  Unique recipes.
                </span>
                <p className="reasons-choice__list-element-text">
                  Our chef develops original dishes that combine classic flavors
                  with new culinary trends.
                </p>
              </li>

              <li className="reasons-choice__list-element">
                <span className="reasons-choice__list-element-title">
                  Variety of choice.
                </span>
                <p className="reasons-choice__list-element-text">
                  We have dishes that cater to the preferences of various
                  gourmets and dietary restrictions.
                </p>
              </li>

              <li className="reasons-choice__list-element">
                <span className="reasons-choice__list-element-title">
                  Acceptable prices.
                </span>
                <p className="reasons-choice__list-element-text">
                  We aim to offer culinary masterpieces at affordable prices so
                  that everyone can enjoy the taste without hurting their
                  wallet.
                </p>
              </li>

              <li className="reasons-choice__list-element">
                <span className="reasons-choice__list-element-title">
                  Regular promotions and special offers.
                </span>
                <p className="reasons-choice__list-element-text">
                  Keep an eye on our news to not miss out on special offers and
                  the opportunity to try out new items from our menu.
                </p>
              </li>

              <li className="reasons-choice__list-element">
                <span className="reasons-choice__list-element-title">
                  Great service.
                </span>
                <p className="reasons-choice__list-element-text">
                  We strive to exceed all your expectations and make your visit
                  to our restaurant truly special. Customer satisfaction is our
                  top priority.
                </p>
              </li>
            </ul>

            <img alt="Chef" src={Chef} className="reasons-choice__img"></img>
          </div>
        </div>
      </div>
      <PhotoGallery />
      <Intermediate />
      <ScrollToTopButton />
    </div>
  );
};

export default About;
