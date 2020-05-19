import React from "react";
import classes from "./NavegationDropDown.css";
import NavigationItem from "../NavegationItem/NavegationItem";

const NavegatioDropDown = (props) => {
  return (
    <ul className={classes.NavigationDropDown}>
      {props.links.map((link) => {
        return (
          <li key={link.text} onClick={props.clicked}>
            <NavigationItem path={link.path} noStyle>
              {link.text}
            </NavigationItem>
          </li>
        );
      })}
    </ul>
  );
};

export default NavegatioDropDown;
