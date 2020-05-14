import React from "react";
import classes from "./ToolBar.css";
import NavigationItems from "../NavegationItems/NavegationItems";
import NavigationItem from "../NavegationItems/NavegationItem/NavegationItem";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
const ToolBar = (props) => {
  return (
    <div className={classes.ToolBar}>
      <Menu click={props.click} />
      <span>
        <Logo width="40px" height="40px" />
      </span>
      <div className={classes.desktopOnly}>
        <NavigationItems />
      </div>
      <NavigationItem path="/shop-car">
        <i className="fas fa-shopping-cart"></i>
      </NavigationItem>
    </div>
  );
};

export default ToolBar;
