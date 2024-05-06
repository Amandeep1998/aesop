import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { GiPlayButton } from "react-icons/gi";
import { assets } from "../../assets/assets";
import { AesopSvg } from "../../assets/svgJs/AesopSvg";

import "./Carousel.css";
import Button from "../Button/Button";
import Content from "../Content/Content";
import { useMediaQuery } from "react-responsive";

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const isTablet = useMediaQuery({ maxWidth: 1050 });
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const [cardData, setCardData] = useState([
    {
      id: 1,
      img: assets.wallpaper1,
      heading: "Mother’s Day",
      title: "For The discerning",
      description:
        "Our range of products provides ample options for even the most particular of gift-givers and recipients—fitting choices to reciprocate maternal guidance.",
      btnText: "Discover Mother’s Day Gifts",
    },
    {
      id: 2,
      img: assets.wallpaper2,
      heading: "Warm weather companions",
      title: "Exfoliating and Replenishing Duo",
      description:
        "Support the skin as humidity rises by polishing away dead skin cells with a cream exfoliant and following with a hydrating, refreshing gel-based masque twice weekly.",
      btnText: "Discover the duo",
    },
    {
      id: 3,
      img: assets.wallpaper3,
      heading: "Skin Care+",
      title: "Vitamin-enriched skin care",
      description:
        "With generous measures of efficacious botanicals and skin-supportive ingredients, the Skin Care+ range was designed to provide optimal replenishment.",
      btnText: "Discover the range",
    },
  ]);

  const nextItem = () => {
    console.log(cardData.length - 1);
    console.log(currentItem);

    if (currentItem === cardData.length - 1) setCurrentItem(0);
    else setCurrentItem(currentItem + 1);
  };

  const prevItem = () => {
    if (currentItem === 0) setCurrentItem(cardData.length - 1);
    else setCurrentItem(currentItem - 1);
  };

  return (
    <>
      <div className="carousel-container">
        <div
          className={`carousel-content-container ${
            currentItem === 0 ? "carousel-content-bg" : ""
          }`}
        >
          <div className="carousel-content-sec1">
            {!isMobile ? (
              <AesopSvg color={`${currentItem === 0 ? "#fffef2" : "#333"}`} />
            ) : null}
          </div>

          {!isMobile ? (
            <>
              <div
                style={{
                  width: "35%",
                  paddingTop: "110px",
                }}
              >
                <Content
                  color={`${currentItem === 0 ? "#fffef2" : "#333"}`}
                  heading={cardData[currentItem].heading}
                  title={cardData[currentItem].title}
                  description={cardData[currentItem].description}
                  btn={
                    <Button
                      color="#fffef2"
                      btnClass={currentItem === 0 ? "btn-white" : "btn-black"}
                      text={cardData[currentItem].btnText}
                    />
                  }
                />
              </div>
            </>
          ) : null}

          {currentItem !== 0 ? (
            <img
              className="carousel-content-sec3-img"
              src={cardData[currentItem].img}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className={`carousel-controllers ${
          isMobile && currentItem === 0 ? "carousel-controllers-bg-1" : ""
        }`}
      >
        <MdKeyboardArrowLeft
          fontSize={24}
          className="carousel-arrows"
          onClick={prevItem}
        />
        <span>{cardData[currentItem].id + " / " + cardData.length}</span>
        <MdKeyboardArrowRight
          fontSize={24}
          className="carousel-arrows"
          onClick={nextItem}
        />

        <GiPlayButton fontSize={22} />
      </div>

      {isMobile ? (
        <>
          <div
            style={{
              width: "100%",
              padding: "70px 20px 40px",
              backgroundColor: currentItem === 0 ? "#333" : "#f6f5e8",
            }}
          >
            <Content
              color={`${currentItem === 0 ? "#fffef2" : "#333"}`}
              heading={cardData[currentItem].heading}
              title={cardData[currentItem].title}
              description={cardData[currentItem].description}
              btn={
                <Button
                  color="#fffef2"
                  btnClass={currentItem === 0 ? "btn-white" : "btn-black"}
                  text={cardData[currentItem].btnText}
                />
              }
            />
          </div>
        </>
      ) : null}
    </>
  );
};

export default Carousel;
