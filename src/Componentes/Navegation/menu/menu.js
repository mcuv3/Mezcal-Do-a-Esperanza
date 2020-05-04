import React from "react";
import classes from "./menu.css";
const menu = (props) => {
  return (
    <div className={classes.Menu} onClick={props.click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default menu;
