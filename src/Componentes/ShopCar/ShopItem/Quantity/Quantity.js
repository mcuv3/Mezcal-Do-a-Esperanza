import React from "react";
import classes from "./Quantity.css";

const Quantity = (props) => {
  return (
    <div className={classes.Count}>
      <i className="fas fa-plus" onClick={() => props.changeCantidad(true)}></i>
      {props.cantidad}
      <i
        className="fas fa-minus"
        onClick={() => props.changeCantidad(false)}
      ></i>
    </div>
  );
};

export default Quantity;
