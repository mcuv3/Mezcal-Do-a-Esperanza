import React from "react";
import classes from "./ShopInfo.css";
const ShopInfo = (props) => {
  return (
    <div className={classes.Concepts}>
      <div className={classes.Concept}>
        <p>Subtotal</p>
        <p>${props.cartPriceSummary.subTotal}</p>
      </div>
      <div className={classes.Concept}>
        <p>Shipping</p>
        <p>${props.cartPriceSummary.shipping}</p>
      </div>
      <div className={classes.Concept}>
        <p>Total(IVA incl.)</p>
        <p>${props.cartPriceSummary.total}</p>
      </div>
    </div>
  );
};

export default ShopInfo;
