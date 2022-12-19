import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Hey, I'm Jimi <span className="wave-1 ">👋</span>
      </h1>
      <h3 className="home__subtitle">Full Stack Software Engineer</h3>
      <p className="home__description">
        I'm IT Enthusiast & Software Engineer from India. Like to explore the IT
        industry. I believe that it's my learning attitude toward new things,
        that keeps me attracted to the IT field, making the world a beautiful
        place to live.
      </p>
      <a href="#contact" className="button button--flex hand_down_button">
        Say Hi &nbsp;&nbsp;
        <span className="send__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="m21.426 11.095-17-8A.999.999 0 0 0 3.03 4.242L4.969 12 3.03 19.758a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81zM5.481 18.197l.839-3.357L12 12 6.32 9.16l-.839-3.357L18.651 12l-13.17 6.197z"
              fill="#fff"
            />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default Data;
