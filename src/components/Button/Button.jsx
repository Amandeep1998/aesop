import React from "react";
import "./Button.css";
import { FaArrowRight } from "react-icons/fa6";

const Button = ({ text, color, bgColor = "transparent", btnClass }) => {
  return (
    <button className={`button ${btnClass}`}>
      <span>{text}</span>
      <FaArrowRight />
    </button>
  );
};

export default Button;
