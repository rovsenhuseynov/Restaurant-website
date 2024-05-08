import React, { useState, useEffect } from "react";
import panelsData from "./panelsData";
import "./ImageSlider.scss";


const Panel = ({ title, imageUrl, isActive, onClick }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => {
        setShowText(true);
      }, 200);
    } else {
      setShowText(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
      onClick={onClick}
    >
      <h3
        className="ImageSlider-text"
        style={{
          opacity: showText ? 1 : 0,
          transitionDuration: showText ? "0.4s" : "0s",
        }}
      >
        {title}
      </h3>
    </div>
  );
};

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePanelClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="ImageSlider">
      <div className="ImageSlider__top">
        <div className="ImageSlider__top-logo">
          <span className="ImageSlider__top-logo-title">Coffee </span>
          <h2 className="ImageSlider__top-logo-subtitle">with friends</h2>
        </div>

        <div className="ImageSlider__top-text">
          Here you can also enjoy quality time with friends or in a family
          circle over a cup of velvety tea or aromatic coffee. Join us and
          create unforgettable moments in the pleasant atmosphere of our
          establishment!
        </div>
      </div>

      <div className="ImageSlider-wrapper">
        {panelsData.map((panel, index) => (
          <Panel
            key={index}
            title={panel.title}
            imageUrl={panel.imageUrl}
            isActive={activeIndex === index}
            onClick={() => handlePanelClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
