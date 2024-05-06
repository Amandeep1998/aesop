import React from "react";
import "./Announcement.css";

const Announcement = ({ text, banner }) => {
  return (
    <>
      <div className={`announcement-container ${banner}`}>
        <span>{text} </span>
        <span
          style={{
            marginLeft: "10px",
          }}
        >
          {banner === "banner-2" ? "+" : null}
        </span>
      </div>
    </>
  );
};

export default Announcement;
