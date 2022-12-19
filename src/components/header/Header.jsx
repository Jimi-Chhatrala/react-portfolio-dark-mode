import React, { useState, useEffect } from "react";
import "./header.css";
// import Dark from "../dark/Dark";
// import "./dark";
const Header = () => {
  /* ================================== Change Background Header ======================================  */

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");

    // when the scroll is higher than 200 viewport height, add the show-header class to a tag with the header tag

    if (this.scrollY >= 80) header.classList.add("show-header");
    else header.classList.remove("show-header");

    // const countElement = document.getElementById("count");
    // countVisits();
    // function countVisits() {
    //   fetch("https://api.countapi.xyz/update/qwerty/ytrewq/?amount=1")
    //     .then((res) => res.json())
    //     .then((res) => {
    //       countElement.innerHTML = res.value + "+";
    //     });
    // }
  });

  /* ================================== Toggle Menu ======================================  */
  // const DarkMode = () => {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    // const themeIcon = document.getElementById("theme-button");
    // const sun = document.querySelector("sun");
    // const moon = document.querySelector("moon");
    // const sun__moon = document.querySelector("sun__moon");
    const sun__control = document.getElementById("sun__control");
    const moon__control = document.getElementById("moon__control");

    if (theme === "dark-theme") {
      setTheme("");
      moon__control.classList.add("moon__rise");
      sun__control.classList.add("sun__set");
      moon__control.classList.add("moon__rise");
      moon__control.classList.remove("moon__set");
      sun__control.classList.remove("sun__rise");

      // moon__control.classList.add("moon__set");
      // sun__control.classList.add("sun__rise");
      // sun__moon.classList.add("moon__rise");
      // sun__moon.classList.remove("sun__rise");
      // moon.style.opacity = 1;
      // sun.style.opacity = 0;
      // moon.style.opacity = 1;
      // document.getElementById("p2").style.color = "blue";
      // sun.classList.add("sun__set");
      // moon.classList.remove("moon__set");
      // sun__moon.classList.add("moon__rise");
      // sun__moon.classList.remove("moon__set");
      // themeIcon.classList.add("uil-moon");
      // themeIcon.classList.remove("uil-sun");
    } else {
      setTheme("dark-theme");
      sun__control.classList.add("sun__rise");
      moon__control.classList.add("moon__set");
      sun__control.classList.remove("sun__set");
      moon__control.classList.remove("moon__rise");

      // sun__moon.classList.add("sun__rise");
      // sun__moon.classList.remove("moon__rise");
      // sun.style.opacity = 1;

      // sun.classList.add("sun__rise");
      // moon.classList.remove("moon__rise");
      // themeIcon.classList.add("uil-sun");
      // themeIcon.classList.remove("uil-moon");
    }
  };
  // };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // const [toggled, setToggled] = useState(false);

  // const handleClick = () => {
  //   setToggled((s) => !s);
  // };

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">
            Jimi
          </a>

          <div className="navbar__full">
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
              <ul className="nav__list grid">
                <li className="nav__item">
                  <a
                    href="#home"
                    onClick={() => {
                      setActiveNav("#home");
                      showMenu(!Toggle);
                    }}
                    className={
                      activeNav === "#home"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    <i className="uil uil-estate nav__icon"></i> Home
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#about"
                    onClick={() => {
                      setActiveNav("#about");
                      showMenu(!Toggle);
                    }}
                    className={
                      activeNav === "#about"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    <i className="uil uil-user nav__icon"></i> About
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#skills"
                    onClick={() => {
                      setActiveNav("#skills");
                      showMenu(!Toggle);
                    }}
                    className={
                      activeNav === "#skills"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    <i className="uil uil-file-alt nav__icon"></i> Skills
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#services"
                    onClick={() => {
                      setActiveNav("#services");
                      showMenu(!Toggle);
                    }}
                    className={
                      activeNav === "#services"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    <i className="uil uil-briefcase-alt nav__icon"></i> Services
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#portfolio"
                    onClick={() => {
                      setActiveNav("#portfolio");
                      showMenu(!Toggle);
                    }}
                    className={
                      activeNav === "#portfolio"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    <i className="uil uil-scenery nav__icon"></i> Portfolio
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#contact"
                    onClick={() => {
                      setActiveNav("#contact");
                      showMenu(!Toggle);
                    }}
                    className={
                      activeNav === "#contact"
                        ? "nav__link active-link"
                        : "nav__link"
                    }
                  >
                    <i className="uil uil-message nav__icon"></i> Contact
                  </a>
                </li>
                {/* <li className="nav__item">
                <span className="nav__link">
                  <Dark toggled={toggled} onClick={handleClick} />
                </span>
              </li> */}
                {/* <li className="nav__item">
                <Dark toggled={toggled} onClick={handleClick} />
              </li> */}
              </ul>

              <i
                className="uil uil-times nav__close"
                onClick={() => showMenu(!Toggle)}
              ></i>
            </div>
            <div className="nav__btns">
              <i
                className="change-theme sun-moon-container"
                // className="uil uil-moon change-theme"
                id="theme-button"
                onClick={() => toggleTheme()}
              >
                <svg
                  id="moon__control"
                  className="moon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"
                    fill="darkblue"
                  />
                </svg>
                <svg
                  id="sun__control"
                  className="sun"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z"
                    fill="orange"
                  />
                </svg>
              </i>
              <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
