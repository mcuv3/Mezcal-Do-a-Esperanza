import React from "react";
import classes from "./ShopInfo.css";
const ShopInfo = (props) => {
  return (
    <div className={classes.Concepts}>
      <div className={classes.Concept}>
        <p>Subtotal</p>
        <p>$15.98</p>
      </div>
      <div className={classes.Concept}>
        <p>Shipping</p>
        <p>$2</p>
      </div>
      <div className={classes.Concept}>
        <p>Total(IVA incl.)</p>
        <p>$17.98</p>
      </div>
    </div>
  );
};

export default ShopInfo;
