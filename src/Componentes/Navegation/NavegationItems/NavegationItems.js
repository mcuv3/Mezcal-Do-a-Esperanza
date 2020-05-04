import React from "react";
import classes from "./NavegationItems.css";
import NavigationItem from "./NavegationItem/NavegationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItem}>
      <NavigationItem> Catalogo</NavigationItem>
      <NavigationItem> About </NavigationItem>
      <NavigationItem> Location </NavigationItem>
      <NavigationItem> Carrito </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
