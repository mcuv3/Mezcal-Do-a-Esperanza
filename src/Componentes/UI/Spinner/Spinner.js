import React from "react";
import classes from "./Spinner.css";

const Spinner = () => {
  return (
    <div className={classes.Spinner}>
      <div className={classes.SpinnerDot}></div>
      <div className={classes.SpinnerDot}></div>
      <div className={classes.SpinnerDot}></div>
      <div className={classes.SpinnerDot}></div>
      <div className={classes.SpinnerDot}></div>
      <div className={classes.SpinnerDot}></div>
    </div>
  );
};

export default Spinner;
