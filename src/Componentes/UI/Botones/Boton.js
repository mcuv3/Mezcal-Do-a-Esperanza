import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Boton.css";

const Boton = (props) => {
  return (
    <NavLink className={[classes.Boton, classes[props.type]].join(" ")} to="/">
      {props.children}
    </NavLink>
  );
};

export default Boton;
