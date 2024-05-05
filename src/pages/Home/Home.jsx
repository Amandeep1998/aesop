import React, { useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import "./Home.css";
import Content from "../../components/Content/Content";
import Button from "../../components/Button/Button";
import { assets } from "../../assets/assets";
import Section from "../../components/Section/Section";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import Footer from "../../components/Footer/Footer";

const Home = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
      <Carousel />
      <ProductSlider
        productData={productData}
        content={
          <Content
            height="500px"
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
        }
        showContent={true}
      />

      <Section
        color={"#333"}
        heading={"A seasonal offer"}
        title={"Experience Karst Eau de Parfum"}
        description={
          "In celebration of balmy summer days, receive a complimentary vial of fresh, herbaceous, marine Karst Eau de Parfum with the purchase of two eligible formulations. (Excludes Click and Collect.)"
        }
        btn={
          <Button
            color="#333"
            btnClass={"btn-black"}
            text={"Explore Summer Formulations"}
          />
        }
        images={<img src={assets.section3img} />}
      />
      <div className="section-4">
        <img src={assets.section4img} />
        <div>
          <Content
            color={"#333"}
            heading={"Options, streamlined"}
            title={"The Gift Finder"}
            description={
              "This practical and playful tool designed to aid in choosing a suitable offering allows the range to be sorted according to a variety of criteria."
            }
            btn={
              <Button
                color="#333"
                btnClass={"btn-black"}
                text={"Discover the Gift Finder"}
              />
            }
          />
        </div>
      </div>
      <ProductSlider productData={productData} showContent={false} />

      <Section
        color={"#333"}
        heading={"High time for high coverage"}
        title={"Protective Facial Lotion SPF50"}
        description={
          "Introducing a daily-use formulation offering broad-spectrum UV protection and sustained hydration—come rain or shine."
        }
        btn={
          <Button
            color="#333"
            btnClass={"btn-black"}
            text={"Discover Protective Facial Lotion SPF50"}
          />
        }
        images={<img src={assets.section6img} />}
      />

      <ProductSlider
        productData={productData}
        content={
          <Content
            height="500px"
            color={"#333"}
            heading={"Sun Care and SPF"}
            title={"Pair time in the sun with intelligent care"}
            description={
              "Daily protection from damaging UVA and UVB sun rays is key to sustaining healthy, supple skin. In addition to protection, Aesop SPF formulations deliver hydration and skin-softening nourishment."
            }
            btn={
              <span>
                Browse formulations {"  "} <FaArrowRight />
              </span>
            }
          />
        }
        showContent={true}
      />

      <div className="section-4">
        <img src={assets.section8img} />
        <div>
          <Content
            color={"#333"}
            heading={"Facial Appointments"}
            title={"Composure for the skin and senses"}
            description={
              "For a well-rounded skin care regimen, Aesop Facial Appointments offer a series of treatments tailored to balance, stimulate and intensely nourish the skin."
            }
            btn={
              <Button color="#333" btnClass={"btn-black"} text={"Learn More"} />
            }
          />
        </div>
      </div>

      <Section
        color={"#333"}
        heading={"Store locator"}
        title={""}
        description={
          "Our consultants are available to host you in-store and provide tailored guidance on gift purchases."
        }
        btn={
          <Button
            color="#333"
            btnClass={"btn-black"}
            text={"Find Nearby Store"}
          />
        }
        images={
          <div
            style={{
              width: "60%",
            }}
            onMouseEnter={() => {
              setShowArrows(true);
            }}
            onMouseLeave={() => {
              setShowArrows(false);
            }}
            className="slider-container"
          >
            <Slider {...settings}>
              <img className="images-slider" src={assets.section8img} />

              <img className="images-slider" src={assets.section6img} />

              <img src={assets.section4img} />
            </Slider>
          </div>
        }
      />

      <div className="section-4">
        <img src={assets.section8img} />
        <div>
          <Content
            color={"#333"}
            heading={""}
            title={"Eminently suited to all"}
            description={
              "An Aesop Gift Card is the ideal gift for the fussy, the faraway and anyone in between—conveniently delivered with the click of a mouse to conceal last-minute selections."
            }
            btn={
              <Button
                color="#333"
                btnClass={"btn-black"}
                text={"Purchase Now"}
              />
            }
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "150px 40px",
        }}
      >
        <span
          style={{
            fontSize: "28px",
            textAlign: "center",
          }}
        >
          ‘Your best and wisest refuge from all troubles <br />
          <span> is in your science.’ </span> <br />
          <span
            style={{
              fontSize: "14px",
            }}
          >
            Ada Lovelace
          </span>
        </span>
      </div>

      <div className="trust-badges-container">
        <div className="trust-badges">
          <span>Certified B Corp</span>
          <p>
            We meet the highest verified standards of social and environmental
            performance, transparency and accountability.
          </p>
        </div>

        <div className="trust-badges">
          <span>Leaping Bunny approved</span>
          <p>
            We meet the highest verified standards of social and environmental
            performance, transparency and accountability.
          </p>
        </div>

        <div className="trust-badges">
          <span>PETA recognition</span>
          <p>
            We appear on PETA's internationally recognised vegan and
            cruelty-free lists.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
