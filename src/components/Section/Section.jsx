import React from "react";

import "./Section.css";
import Content from "../Content/Content";

const Section = ({ color, heading, title, description, btn, images }) => {
  return (
    <>
      <div className="section-3">
        <div className="sec-div">
          <Content
            color={color}
            heading={heading}
            title={title}
            description={description}
            btn={btn}
          />
        </div>
        <div className="sec-img">{images}</div>
      </div>
    </>
  );
};

export default Section;
