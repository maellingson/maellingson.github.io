import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (
  <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default Jumbotron;
