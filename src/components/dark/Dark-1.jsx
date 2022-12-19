import React from "react";
import "./dark.css";
import Moon from "../../assets/moon.svg";

const Dark = ({ toggled, onClick }) => {
  return (
    <div onClick={onClick} className={`toggle${toggled ? " night" : ""}`}>
      <i className="bx bxs-moon"></i>
      {/* <div className="notch">
        <div className="crater" />
        <div className="crater" />
      </div>
      <div>
        <div className="shape sm" />
        <div className="shape sm" />
        <div className="shape md" />
        <div className="shape lg" />
      </div> */}
    </div>
  );
};

export default Dark;
