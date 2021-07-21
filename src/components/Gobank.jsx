import React from "react";
import "../components/Gobank.css";

const Gobank = () => {
  return (
    <>
      <h1>GoBank - Banking App</h1>
      <video width="80%" controls autoplay className="video">
        <source src="GoBank.mp4" type="video/mp4" />
      </video>
      <h4 className="details">
        More details on&nbsp;
        <a
          href="https://www.behance.net/gallery/123879673/GoBank-Banking-App"
          className="Link"
        >
          Behance
        </a>
      </h4>
    </>
  );
};

export default Gobank;
