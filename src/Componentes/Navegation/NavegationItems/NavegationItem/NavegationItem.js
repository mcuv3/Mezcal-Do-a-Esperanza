import React from "react";
import classes from "./NavegationItem.css";
import { NavLink } from "react-router-dom";

const NavegationItem = (props) => {
  let style = classes.NavigationItem;
  if (props.noStyle) style = "";
  return (
    <NavLink className={style} to={props.path}>
      {props.children}
    </NavLink>
  );
};

export default NavegationItem;
