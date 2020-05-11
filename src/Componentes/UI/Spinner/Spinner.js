import React from "react";
import classes from "./Spinner.css";

const Spinner = () => {
  return (
    <div
      className={classes.Spinner}
      style={{ alignSelf: "center", justifySelf: "center", marginTop: "3em" }}
    >
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
