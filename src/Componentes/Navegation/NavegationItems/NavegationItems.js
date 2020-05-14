import React, { Component } from "react";
import classes from "./NavegationItems.css";
import NavigationItem from "./NavegationItem/NavegationItem";
import NavegationDropDown from "./NavegationDropDown/NavegatioDropDown";

const links = [
  { path: "/", text: "Mezcales" },
  { path: "/", text: "Salsas en Polvo" },
  { path: "/", text: "Salsas Liquidas" },
  { path: "/", text: "Dulces" },
];

class NavigationItems extends Component {
  state = {
    showDropDown: false,
  };
  showDropDownToggle = () =>
    this.setState({ showDropDown: !this.state.showDropDown });

  render() {
    return (
      <ul className={classes.NavigationItems}>
        <NavigationItem path="/catalogo">
          <i className="fas fa-wine-bottle" style={{ color: "green" }}></i>
          <i className="fas fa-wine-bottle" style={{ color: "green" }}></i>
          <i className="fas fa-wine-bottle" style={{ color: "green" }}></i>
          {/* <i
            className="fas fa-caret-down"
            onClick={this.showDropDownToggle}
            onMouseEnter={this.showDropDownToggle}
          ></i> */}
        </NavigationItem>

        {this.state.showDropDown ? <NavegationDropDown links={links} /> : null}
      </ul>
    );
  }
}

export default NavigationItems;
