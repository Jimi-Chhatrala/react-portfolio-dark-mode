import React from "react";

const ScrollDown = () => {
  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: "20px",
            }}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={{
              fill: "none",
              stroke: "var(--title-color)",
              strokeWidth: "20px",
            }}
          ></path>
        </svg>

        <span className="home__scroll-name">Scroll Down</span>

        {/* <i > */}
        <svg
          className="home__scroll-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"
            style={{
              fill: "var(--title-color)",
              // fill: "none",
              // stroke: "var(--title-color)",
              // strokeWidth: "20px",
            }}
          />
        </svg>
        {/* </i> */}
      </a>
    </div>
  );
};

export default ScrollDown;
