import React from "react";
import classes from "./ShopInfo.css";
const ShopInfo = (props) => {
  let subtotal = props.products.reduce(
    (acc, p) => acc + p.cantidad * parseInt(p.Precio, 10),
    0
  );
  return (
    <div className={classes.Concepts}>
      <div className={classes.Concept}>
        <p>Subtotal</p>
        <p>${subtotal}</p>
      </div>
      <div className={classes.Concept}>
        <p>Shipping</p>
        <p>$2</p>
      </div>
      <div className={classes.Concept}>
        <p>Total(IVA incl.)</p>
        <p>${subtotal * 1.17 + 2}</p>
      </div>
    </div>
  );
};

export default ShopInfo;
