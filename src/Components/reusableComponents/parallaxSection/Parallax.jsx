import React, { useEffect, useRef, useState } from "react";
import "./parallax.scss";

function Parallax({ backgroundImage, title, titleItalic }) {
  const parallaxRef = useRef(null);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = parallaxRef.current;
      if (!parallaxElement) return;

      const rect = parallaxElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const middleOfWindow = windowHeight / 5.5;
      const sectionTop = middleOfWindow - windowHeight / 0;
      const sectionBottom = middleOfWindow + windowHeight / 0;

      if (rect.top <= sectionBottom && rect.bottom >= sectionTop) {
        const distanceFromCenter = Math.abs(middleOfWindow - rect.top);
        const maxOpacityDistance = windowHeight / 2.5;
        const opacity = 1 - distanceFromCenter / maxOpacityDistance;
        setScrollOpacity(opacity < 0 ? 0 : opacity);
      } else {
        setScrollOpacity(1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <div className="parallax-wrapper" style={parallaxStyle} ref={parallaxRef}>
      <div className="parallax__content">
        <h2
          className="parallax__title-italics"
          style={{ opacity: scrollOpacity }}
        >
          {titleItalic}
        </h2>
        <h2 className="parallax__title" style={{ opacity: scrollOpacity }}>
          {title}
        </h2>
      </div>
      <div className="mask"></div>
    </div>
  );
}

export default Parallax;
