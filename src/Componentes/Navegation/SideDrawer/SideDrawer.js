import React from "react";
import classes from "./SideDrawer.css";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Logo from "../logo/logo";
import DropDown from "../NavegationComponents/NavegationDropDown/NavegatioDropDown";

const links = [
  { path: "/catalogo", text: "Todos" },
  { path: "/catalogo/Mezcal", text: "Mezcales" },
  { path: "/catalogo/Sabor", text: "Mezcal de Sabor" },
  { path: "/catalogo/Licor", text: "Licor de Mezcal" },
  { path: "/catalogo/Sal y Salsas", text: "Sal y Salsas" },
  { path: "/catalogo/Otros", text: "Extras" },
];
const SideDrawer = (props) => {
  let isOpen = [classes.SideDrawer, classes.close];
  if (props.show) isOpen = [classes.SideDrawer, classes.open];
  return (
    <React.Fragment>
      <BackDrop show={props.show} click={props.click} />
      <div className={isOpen.join(" ")}>
        <span className={classes.Logo}>
          <Logo width="60px" height="60px" />
        </span>
        <DropDown links={links} clicked={props.click} />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
