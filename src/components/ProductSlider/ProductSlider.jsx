import React, { useState } from "react";
import { assets } from "../../assets/assets";
import Slider from "react-slick";
import "./ProductSlider.css";
import Content from "../Content/Content";
import { FaArrowRight } from "react-icons/fa6";

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

const ProductSlider = () => {
  const [productData, setProductData] = useState([
    {
      id: 1,
      img: assets.immaculate,
      heading: "Immaculate Facial Tonic",
      description: "Exfoliating tonic with a light finish",
    },
    {
      id: 2,
      img: assets.btriplecgel,
      heading: "B Triple C Facial Balancing Gel",
      description: "Embracing, vitamin-rich hydration",
    },
    {
      id: 1,
      img: assets.immaculate,
      heading: "Immaculate Facial Tonic",
      description: "Exfoliating tonic with a light finish",
    },
    {
      id: 2,
      img: assets.btriplecgel,
      heading: "B Triple C Facial Balancing Gel",
      description: "Embracing, vitamin-rich hydration",
    },
    {
      id: 1,
      img: assets.immaculate,
      heading: "Immaculate Facial Tonic",
      description: "Exfoliating tonic with a light finish",
    },
    {
      id: 2,
      img: assets.btriplecgel,
      heading: "B Triple C Facial Balancing Gel",
      description: "Embracing, vitamin-rich hydration",
    },
    {
      id: 1,
      img: assets.immaculate,
      heading: "Immaculate Facial Tonic",
      description: "Exfoliating tonic with a light finish",
    },
    {
      id: 2,
      img: assets.btriplecgel,
      heading: "B Triple C Facial Balancing Gel",
      description: "Embracing, vitamin-rich hydration",
    },
  ]);

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

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
    <div
      onMouseEnter={() => {
        setShowArrows(true);
      }}
      onMouseLeave={() => {
        setShowArrows(false);
      }}
      className="slider-container custom-slider-container"
    >
      <Slider {...settings}>
        <div>
          <Content
            color={"#333"}
            heading={"Skin Care+"}
            title={"Intensive formulations for complex skin"}
            description={
              "Explore products formulated with mature skin and urban dwellers in mind, to provide daily hydration and the additional benefit of potent vitamins and anti-oxidants."
            }
            btn={
              <span>
                Browse formulations {"  "} <FaArrowRight />
              </span>
            }
          />
        </div>
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
  );
};

export default ProductSlider;
