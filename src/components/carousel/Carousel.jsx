import ArrowForward from "../../assets/arrow_forward.webp";
import ArrowBack from "../../assets/arrow_back.webp";
import { useState } from "react";
import "./carousel.scss";

export const Carousel = ({ slides }) => {
  const slidesLength = slides.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideBack = function () {
    setCurrentSlide(currentSlide === 0 ? slidesLength - 1 : currentSlide - 1);
  };

  const slideForward = function () {
    setCurrentSlide(currentSlide === slidesLength - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div id="carousel_container">
      {slidesLength > 1 && (
        <>
          <img
            className="arrow_Back"
            src={ArrowBack}
            alt="Fléche navigation, image précédente"
            onClick={slideBack}
            disabled={slidesLength <= 1}
          />
          <img
            className="arrow_Forward"
            src={ArrowForward}
            alt="Fléche navigation, image suivante"
            onClick={slideForward}
            disabled={slidesLength <= 1}
          />
          <img
            className="carousel_Slide"
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
          />
          <div className="slide_Counter">
            {" "}
            {currentSlide + 1}/{slidesLength}
          </div>
        </>
      )}
      {slidesLength === 1 && (
        <img
          className="carousel_Slide"
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
        />
      )}
    </div>
  );
};
