import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Boton.css";

const BotonNav = (props) => {
  return (
    <NavLink
      className={[classes.Boton, classes[props.type]].join(" ")}
      to={props.path}
      onClick={props.click}
    >
      {props.children}
    </NavLink>
  );
};

export default BotonNav;
