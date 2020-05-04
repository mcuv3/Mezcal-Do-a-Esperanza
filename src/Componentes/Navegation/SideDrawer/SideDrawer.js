import React from "react";
import classes from "./SideDrawer.css";
import BackDrop from "../../UI/BackDrop/BackDrop";
import Logo from "../logo/logo";
import NavigationItems from "../NavegationItems/NavegationItems";

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
        <NavigationItems />
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
