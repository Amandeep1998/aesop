import React from "react";
import "./Content.css";

const Content = ({
  heading,
  title,
  description,
  btn,
  color,
  height = "100%",
}) => {
  return (
    <div
      style={{
        color: color,
        height: height,
      }}
      className="content"
    >
      <h2>{heading}</h2>
      <h1>{title}</h1>
      <p>{description}</p>
      {btn}
    </div>
  );
};

export default Content;
