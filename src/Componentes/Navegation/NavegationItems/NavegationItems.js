import React from "react";
import classes from "./NavegationItems.css";
import NavigationItem from "./NavegationItem/NavegationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem path="/catalogo"> Catalogo</NavigationItem>
      <NavigationItem path="/about"> Acerca de </NavigationItem>
      <NavigationItem path="/ubicacion"> Ubicacion </NavigationItem>
      <NavigationItem path="/carrito"> Carrito </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
