import React from "react";
import HTML5 from "../../assets/icons/html5.svg";
import CSS3 from "../../assets/icons/css3.svg";
import JAVASCRIPT from "../../assets/icons/javascript.svg";
import JQUERY from "../../assets/icons/jquery.svg";
import TAILWINDCSS from "../../assets/icons/tailwindcss.svg";
import BOOTSTRAP from "../../assets/icons/bootstrap.svg";
import GIT from "../../assets/icons/git.svg";
import REACT from "../../assets/icons/react.svg";
import MATERIALUI from "../../assets/icons/materialui.svg";
import MATERIALIZECSS from "../../assets/icons/materializecss.svg";
import SASS from "../../assets/icons/sass.svg";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Designer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bxl">
              <img src={HTML5} alt="" srcSet="" />
            </i>
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx">
              <img src={CSS3} alt="" />
            </i>
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx">
              <img src={JAVASCRIPT} alt="" />
            </i>
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <i className="bx">
              <img src={MATERIALIZECSS} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Materialize CSS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div> */}
          <div className="skills__data">
            <i className="bx">
              <img src={JQUERY} alt="" />
            </i>
            <div>
              <h3 className="skills__name">jQuery</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx">
              <img src={SASS} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Sass</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx">
              <img src={BOOTSTRAP} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <i className="bx">
              <img src={TAILWINDCSS} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Tailwind CSS</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div> */}
          <div className="skills__data">
            <i className="bx">
              <img src={GIT} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx">
              <img src={REACT} alt="" />
            </i>
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <i className="bx">
              <img src={MATERIALUI} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Material UI</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
