import React from "react";
import classes from "./CartWrapper.css";
import logo from "../../../Assets/logo.png";

const CartWrapper = (props) => {
  return (
    <div className={classes.Checkout}>
      <div className={classes.Cabeza}>
        <div className={classes.LogoHead}>
          <img src={logo} alt="logo" />
          <p>Tu orden de</p>
          <h3>Doña Esperanza</h3>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default CartWrapper;
