import React from "react";
import PHP from "../../assets/icons/php.svg";
import LARAVEL from "../../assets/icons/laravel.svg";
import MYSQL from "../../assets/icons/mysql.svg";
import NODEJS from "../../assets/icons/nodejs.svg";
import EXPRESSJS from "../../assets/icons/expressjs.svg";
import MONGODB from "../../assets/icons/mongodb.svg";
import JAVA from "../../assets/icons/java.svg";
import SPRINGBOOT from "../../assets/icons/springboot.svg";
import GITHUB from "../../assets/icons/github.svg";
import FIREBASE from "../../assets/icons/firebase.svg";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx">
              <img width={25} height={25} src={PHP} alt="" />
            </i>
            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="fa-brands">
              <img width={25} height={25} src={LARAVEL} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Laravel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="fa-solid">
              <img src={MYSQL} alt="" />
            </i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <i className="fa-solid">
              <img src={JAVA} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Java</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> */}
          <div className="skills__data">
            <i className="fa-solid">
              <img src={GITHUB} alt="" />
            </i>
            <div>
              <h3 className="skills__name">GitHub</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx">
              <img src={NODEJS} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Node JS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx">
              <img src={EXPRESSJS} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Express JS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx">
              <img src={MONGODB} alt="" />
            </i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <i className="bx">
              <img src={SPRINGBOOT} width={20} height={20} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Spring Boot</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div> */}
          <div className="skills__data">
            <i className="bx">
              <img src={FIREBASE} alt="" />
            </i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          {/* <div className="skills__data">
            <i className="bx">
              <img src={FIREBASE} alt="" />
            </i>
            <div>
              <h3 className="skills__name">&nbsp;</h3>
              <span className="skills__level">&nbsp;</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Backend;
