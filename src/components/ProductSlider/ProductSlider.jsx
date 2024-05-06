import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Slider from "react-slick";
import "./ProductSlider.css";
import Content from "../Content/Content";
import { FaArrowRight } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

const ProductView = ({ img, heading, description }) => {
  return (
    <>
      <div className="productview-container">
        <img
          style={{
            width: "400px",
            height: "400px",
            objectFit: "contain",
          }}
          src={img}
        />

        <span>{heading}</span>
        <span>{description}</span>
      </div>
    </>
  );
};

const ProductSlider = ({ showContent, content, productData }) => {
  const [showArrows, setShowArrows] = useState(false);

  function SampleNextArrow(props) {
    const { className, style, onClick, customClass, showArrows } = props;

    if (!showArrows) return <div></div>;
    else
      return (
        <div
          className={`${className} ${customClass}`}
          style={{
            ...style,
            display: "block",
          }}
          onClick={onClick}
        />
      );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick, customClass } = props;

    if (!showArrows) return <div></div>;
    else
      return (
        <div
          className={`${className} ${customClass}`}
          style={{
            ...style,
            display: "block",
          }}
          onClick={onClick}
        />
      );
  }

  const isTablet = useMediaQuery({ maxWidth: 1050 });
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow showArrows={showArrows} customClass="slider-arrows" />
    ),
    prevArrow: (
      <SamplePrevArrow showArrows={showArrows} customClass="slider-arrows" />
    ),
    adaptiveHeight: true,
  };

  return (
    <>
      <div
        onMouseEnter={() => {
          setShowArrows(true);
        }}
        onMouseLeave={() => {
          setShowArrows(false);
        }}
        className="slider-container custom-slider-container"
      >
        {showContent && isMobile && content}
        <Slider {...settings}>
          {showContent && !isMobile && content}

          {productData &&
            productData.map((item, i) => {
              return (
                <>
                  <ProductView
                    heading={item.heading}
                    img={item.img}
                    description={item.description}
                    key={i}
                  />
                </>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default ProductSlider;
