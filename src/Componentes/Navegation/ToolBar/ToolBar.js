import React from "react";
import classes from "./ToolBar.css";
import NavigationItem from "../NavegationComponents/NavegationItem/NavegationItem";
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
        <NavigationItem path="/catalogo">
          <i className="fas fa-wine-bottle" style={{ color: "green" }}></i>
          <i className="fas fa-wine-bottle" style={{ color: "green" }}></i>
          <i className="fas fa-wine-bottle" style={{ color: "green" }}></i>
        </NavigationItem>
      </div>
      <NavigationItem path="/shop-car">
        <i className="fas fa-shopping-cart"></i>
      </NavigationItem>
    </div>
  );
};

export default ToolBar;
