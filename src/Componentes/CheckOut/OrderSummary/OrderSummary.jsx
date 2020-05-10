import React from "react";
import classes from "./OrderSummary.css";
import SuccesAnimation from "../../UI/SuccessAnimation/SuccessAnimation";
const OrderSummary = (props) => {
  return (
    <div className={classes.OrderSummary}>
      <div className={classes.Success}>
        <SuccesAnimation />
      </div>
    </div>
  );
};

export default OrderSummary;
