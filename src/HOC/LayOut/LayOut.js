import React, { Component } from "react";
import classes from "./LayOut.css";
import ToolBar from "../../Componentes/Navegation/ToolBar/ToolBar";
import SideDrawer from "../../Componentes/Navegation/SideDrawer/SideDrawer";

export class LayOut extends Component {
  state = {
    showSideDrawer: false,
  };
  toggleShowSideDrawer = () =>
    this.setState({ showSideDrawer: !this.state.showSideDrawer });

  render() {
    return (
      <div className={classes.Conentenedor}>
        <ToolBar click={this.toggleShowSideDrawer} />
        <SideDrawer
          show={this.state.showSideDrawer}
          click={this.toggleShowSideDrawer}
        />
        <main>{this.props.children}</main>
        <footer></footer>
      </div>
    );
  }
}

export default LayOut;
