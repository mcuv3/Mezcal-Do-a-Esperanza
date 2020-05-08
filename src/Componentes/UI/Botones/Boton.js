import React from "react";
import classes from "./Boton.css";

const Boton = (props) => {
  return (
    <button
      onClick={props.click}
      className={[classes.Boton, classes[props.type]].join(" ")}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Boton;
