import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const ihLogo = "../images/ironhack-logo.svg";
const reactLogo = "../images/react-logo.svg";
const menuTop = "../images/menu-top.svg";

const landingText = (
  <div>
    <div className="nav">
      <img src={ihLogo} alt="" />
      <img src={menuTop} alt="" />
    </div>
    <div className="landingTop">
      <div className="landingText">
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn a frontend framework from scratch, to become a ninja
          developer
        </p>
        <button>Awesome!</button>
      </div>
      <div>
        <img id="react1" src={reactLogo} alt="" />
        <img id="react2" src={reactLogo} alt="" />
        <img id="react3" src={reactLogo} alt="" />
      </div>
    </div>
    <div className="features">
      <div className="featureBox">
        <img src="../images/icon1.png" alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className="featureBox">
        <img src="../images/icon2.png" alt="" />
        <h3>Components</h3>
        <p>Build encapsulated Components that manage their state</p>
      </div>
      <div className="featureBox">
        <img src="../images/icon3.png" alt="" />
        <h3>Single-way</h3>
        <p>A set of immutable values are passed to the components</p>
      </div>
      <div className="featureBox">
        <img src="../images/icon4.png" alt="" />
        <h3>JSX</h3>
        <p>Statically typed, designed to run on modern browsers</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(landingText, document.getElementById("root"));
