import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./photo_gallery.scss";

import restaurant1 from "../../../assets/image/restoran/restaurant_1.webp";
import restaurant2 from "../../../assets/image/restoran/restaurant_2.webp";
import restaurant3 from "../../../assets/image/restoran/restaurant_3.webp";
import restaurant4 from "../../../assets/image/restoran/restaurant_4.webp";
import restaurant5 from "../../../assets/image/restoran/restaurant_5.webp";
import restaurant6 from "../../../assets/image/restoran/restaurant_6.webp";
import restaurant7 from "../../../assets/image/restoran/restaurant_7.webp";
import restaurant8 from "../../../assets/image/restoran/restaurant_8.svg";


const Modal = ({ closeModal, src }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
        <img src={src} alt="Modal" />
      </div>
    </div>
  );
};

const images1 = [
  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,

  restaurant1,
  restaurant2,
  restaurant3,
  restaurant4,
];
const images2 = [
  restaurant5,
  restaurant6,
  restaurant7,
  
  restaurant8,
  restaurant5,
  restaurant6,
  restaurant7,
  restaurant8,
];

const PhotoGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src) => {
    setModalImageSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="photo-gallery__wrapper">
      <div id="grid-container">
        <div className="grid">
          <div className="row forward">
            {images1.map((src, index) => (
              <div
                key={index}
                className={`box fill${(index % 4) + 1}`}
                onClick={() => openModal(src)}
              ></div>
            ))}
          </div>

          <div className="row backward">
            {images2.map((src, index) => (
              <div
                key={index}
                className={`box fill${(index % 4) + 5}`}
                onClick={() => openModal(src)}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {modalOpen &&
        ReactDOM.createPortal(
          <Modal closeModal={closeModal} src={modalImageSrc} />,
          document.getElementById("modal-root")
        )}
    </div>
  );
};

export default PhotoGallery;
