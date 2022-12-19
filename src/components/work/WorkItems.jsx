import React, { useState } from "react";
import HTML5 from "../../assets/icons/html5.svg";

const WorkItems = ({ item }) => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  // const techstackArray = item.techstack;
  const techstackArray = item["techstack"];
  const techStackArrayDisplay = techstackArray.map((tsa, index) => (
    <img
      key={index}
      // src={tsa}
      // src={require(`../../assets/icons/${tsa}`).default}
      src={`icons/${tsa.toLowerCase()}.svg`}
      alt=""
      className="project__tech img__thumbnail"
    />
  ));
  // **********************************************************************
  // FINALLY DONE
  // {techstackArray.map((tsa) => (
  //   <img src={tsa} alt="" className="project__tech img__thumbnail" />
  // ))}
  // **********************************************************************

  // console.log(techstackArray);
  // let result = techstackArray.map((tsa) => <p>{tsa}</p>);
  // console.log(typeof item["techstack"][0]);
  // console.log(item["techstack"].length);

  // <img
  //   src={item["techstack"][0]}
  //   alt="HTML5"
  //   className="project__tech img__thumbnail"
  // />;
  // let html_5 = "html5.svg";

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      {/* <a href="#portfolio" className="work__button">
        View More <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a> */}
      <span
        className="work__button services__button"
        onClick={() => toggleTab(1)}
      >
        View More <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </span>
      <div
        className={
          toggleState === 1 ? "services__modal active-modal" : "services__modal"
        }
      >
        <div className="services__modal-content">
          <i
            onClick={() => toggleTab(0)}
            className="uil uil-times services__modal-close"
          ></i>
          <img src={item.image} alt="" className="work__modal__img" />
          <h3 className="services__modal-title">{item.title}</h3>
          <p className="services__modal-description">{item.description}</p>

          <div className="project__techs">
            {techStackArrayDisplay}
            {/* <img
              src={`images/${html_5}`}
              alt="HTML5"
              className="project__tech img__thumbnail"
            /> */}
            {/* {techstackArray.map((tsa) => (
              <img src={tsa} alt="" className="project__tech img__thumbnail" />
            ))} */}
            {/* {result} */}
            {/* {item.techstack} */}
            {/* {item["techstack"][0]} */}
            {/* {techstackArray} */}
            {/* {techstackArray.map((name) => name)} */}
            {/* {techstackArray.map((name) => ({ name }))} */}
            {/* <img
              src={HTML5}
              alt="HTML5"
              className="project__tech img__thumbnail"
            />
            <img
              src={CSS3}
              alt="CSS3"
              className="project__tech img__thumbnail"
            />
            <img
              src={JAVASCRIPT}
              alt="JavaScript"
              className="project__tech img__thumbnail"
            /> */}
          </div>

          <a href={item.demolink} target="_blank" className="work__button">
            Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
          </a>
          {/* <ul className="services__modal-sevices grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I develop the user interface.
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Web page development.</p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I create ux element interactions.
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I position your company brand.
              </p>
            </li>
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                Design and mockups of products for companies.
              </p>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
