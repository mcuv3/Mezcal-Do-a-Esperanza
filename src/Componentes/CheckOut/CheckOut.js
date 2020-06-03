import React from "react";
import classes from "./CheckOut.css";

const CheckOut = (props) => {
  return (
    <div className={classes.Info}>
      <label htmlFor="Nombre">
        {props.userData.Nombre} {props.userData.Apellido}
      </label>
      <label htmlFor="Direccion">
        {props.userData.Calle} {props.userData.Colonia}
      </label>
      <label htmlFor="Estado">
        {props.userData.Estado} {props.userData.Ciudad}
      </label>
      <label htmlFor="CP">{props.userData.CodigoPostal}</label>
      <button>PAYPAL</button>
    </div>
  );
};

export default CheckOut;
