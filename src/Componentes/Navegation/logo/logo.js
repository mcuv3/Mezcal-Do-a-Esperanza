import React from "react";
import img from "../../../Assets/logo.png";
import { NavLink } from "react-router-dom";
const logo = (props) => {
  return (
    <NavLink to="/">
      <img
        src={img}
        alt="log"
        style={{ width: props.width, height: props.height }}
      />
    </NavLink>
  );
};

export default logo;
