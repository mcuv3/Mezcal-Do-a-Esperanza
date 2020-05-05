import React from "react";
import classes from "./NavegationItem.css";
import { NavLink } from "react-router-dom";

const NavegationItem = (props) => {
  return (
    <NavLink className={classes.NavegatioItem} to={props.path}>
      {props.children}
    </NavLink>
  );
};

export default NavegationItem;
