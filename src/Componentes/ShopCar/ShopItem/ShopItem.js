import React, { Component } from "react";
import classes from "./ShopItem.css";
import { Transition } from "react-transition-group";

class ShopItem extends Component {
  state = {
    show: false,
  };
  onToggleInfo = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <React.Fragment>
        <div className={classes.ShopItem}>
          <div className={classes.More}>
            <i
              className="fas fa-chevron-up"
              onClick={this.onToggleInfo}
              style={{ transform: this.state.show ? "rotate(180deg)" : null }}
            ></i>
          </div>
          <p style={{ marginRight: "auto", marginLeft: "10px" }}>
            {this.props.productToShop.Nombre}
          </p>
          <div className={classes.Count}>
            <i
              className="fas fa-plus"
              onClick={() => this.props.changeCantidad(true)}
            ></i>
            {this.props.productToShop.cantidad}
            <i
              className="fas fa-minus"
              onClick={() => this.props.changeCantidad(false)}
            ></i>
          </div>
          <p className={classes.Precio}>
            $
            {this.props.productToShop.Precio *
              this.props.productToShop.cantidad}
          </p>

          <div className={classes.More} style={{ backgroundColor: "#d17878" }}>
            <i
              className="fas fa-backspace"
              onClick={this.props.deleteProduct}
            ></i>
          </div>
        </div>
        <Transition in={this.state.show} timeout={500}>
          {(state) => (
            <div
              className={classes.MoreInfo}
              style={{
                transition: "all 0.5s ease",
                marginTop: state === "exited" ? "-0px" : null,
                height:
                  state === "entering"
                    ? "100px"
                    : state === "entered"
                    ? "100px"
                    : "0",
                opacity: state === "entered" ? "1" : 0,
              }}
            >
              <p>{this.props.productToShop.Descripcion.slice(0, 150)} ....</p>
            </div>
          )}
        </Transition>
      </React.Fragment>
    );
  }
}

export default ShopItem;
