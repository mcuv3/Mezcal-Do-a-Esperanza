import React, { Component } from "react";
import classes from "./LayOut.css";
import ToolBar from "../../Componentes/Navegation/ToolBar/ToolBar";
import SideDrawer from "../../Componentes/Navegation/SideDrawer/SideDrawer";
import Footer from "../../Componentes/Footer/Footer";

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
        <main className={classes.main}>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default LayOut;
