import React from "react";
import classes from "./ProductosControl.css";
import Search from "../../UI/Search/Search";
import DropDown from "../../Navegation/NavegationItems/NavegationDropDown/NavegatioDropDown";
const links = [
  { path: "/", text: "Mezcales" },
  { path: "/", text: "Salsas en Polvo" },
  { path: "/", text: "Salsas Liquidas" },
  { path: "/", text: "Dulces" },
];
const ProductosControl = (props) => {
  return (
    <div className={classes.Controls}>
      <Search />
      <ul className={classes.NavigationItems}>
        <div className={classes.Seleccion}>
          Secciones
          <i
            className="fas fa-caret-down"
            // onClick={this.showDropDownToggle}
            // onMouseEnter={this.showDropDownToggle}
          ></i>
        </div>

        {/* <DropDown links={links} /> */}
        {/* {this.state.showDropDown ?  : null} */}
      </ul>
    </div>
  );
};

export default ProductosControl;
