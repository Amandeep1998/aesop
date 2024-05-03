import React from "react";
import "./Announcement.css";

const Announcement = ({ text, banner }) => {
  return (
    <>
      <div className={`announcement-container ${banner}`}>
        {text}
        <span>
          {banner === "banner-1" ? (
            <a>Browse Formulations</a>
          ) : (
            <span className="ml-5"> + </span>
          )}
        </span>
      </div>
    </>
  );
};

export default Announcement;
