import React, { Component } from "react";
import classes from "./ProductoInfo.css";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/Index";
import BasicInfo from "../../../Componentes/Catalogo/BasicInfo/BasicInfo";
import { withRouter } from "react-router-dom";

class ProductoInfo extends Component {
  state = {
    cantidad: 1,
  };

  componentDidMount() {
    if (this.props.selectedProduct) {
      localStorage.setItem(
        "productSelected",
        JSON.stringify(this.props.selectedProduct)
      );
    }
  }

  componentWillUnmount() {
    localStorage.removeItem("productSelected");
    this.props.onUnSelectProduct();
  }

  changeCantidad = (isAdd) => {
    this.setState({
      cantidad: isAdd
        ? this.state.cantidad + 1
        : this.state.cantidad > 1
        ? this.state.cantidad - 1
        : 1,
    });
  };
  addProductToCart = () => {
    this.props.addProduct(this.props.selectedProduct, this.state.cantidad);
  };

  render() {
    console.log(this.props);
    return (
      <div className={classes.Container}>
        <div
          className={classes.BackButton}
          onClick={() => this.props.history.goBack()}
        >
          <i className="fas fa-long-arrow-alt-left"></i>
        </div>
        <div className={classes.ProductInfo}>
          <BasicInfo
            imageWidth="300px"
            imageHeight="300px"
            producto={this.props.selectedProduct}
            cantidad={this.state.cantidad}
            changeCantidad={this.changeCantidad}
            // add={() => this.changeCantidad(1)}
            // less={() => this.changeCantidad(0)}
            page="catalogo-item"
            addToCart={this.addProductToCart}
          />
          <p className={classes.Cuerpo}>
            {this.props.selectedProduct.Descripcion}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedProduct: state.catalogo.productSelected,
    error: state.catalogo.error,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUnSelectProduct: () => dispatch(actions.onUnSelectProduct()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProductoInfo));
