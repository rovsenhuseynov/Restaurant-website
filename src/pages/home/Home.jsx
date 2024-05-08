import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import "../../assets/globalStyles.scss";
import ScrollToTopButton from "../../Components/reusableComponents/ScrollToTopButton/ScrollToTopButton";
import OurStory from "./OurStory/OurStory";
import DiscoverMenu from "./DiscoverMenu/DiscoverMenu";
import ParallaxElementFirst from "./ParallaxElementFirst/ParallaxElementFirst";
import ParallaxElementSecond from "./ParallaxElementSecond/ParallaxElementSecond";
import ParallaxElementThird from "./ParallaxElementThird/ParallaxElementThird";
import CulinaryDelight from "./CulinaryDelight/CulinaryDelight";
import CookingW from "../home/CookingWorld/CookingW";
import ImageSlider from "./ImageSlider/ImageSlider";
import ParallaxReservation from "../home/ParallaxReservation/ParallaxReservation";
import NavLinkBtn from "../../Components/reusableComponents/Btn/NavLinkBtn";

const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="home__wrapper-head">
        <h1 className="home__wrapper-title">Food Website</h1>
        <p className="home__wrapper-subtext">Best Food In Azerbaijan</p>

        <Link to="/menu" className="home__wrapper-link nav-link ">
          <NavLinkBtn text="ORDER NOW" className="order-btn" />
        </Link>
      </div>

      <div className="home__sections">
        <OurStory />
        <ParallaxElementFirst />
        <DiscoverMenu />
        <ParallaxElementSecond />
        <CulinaryDelight />
        <ParallaxElementThird />
        <CookingW />
        <ImageSlider />
        <ParallaxReservation />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
