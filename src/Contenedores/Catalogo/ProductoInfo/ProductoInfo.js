import React, { Component } from "react";
import classes from "./ProductoInfo.css";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/Index";
import BasicInfo from "../../../Componentes/Catalogo/BasicInfo/BasicInfo";

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
    return (
      <div className={classes.ProductInfo}>
        <div className={classes.BackButton}>Back</div>
        <BasicInfo
          imageWidth="300px"
          imageHeight="300px"
          producto={this.props.selectedProduct}
          cantidad={this.state.cantidad}
          add={() => this.changeCantidad(1)}
          less={() => this.changeCantidad(0)}
          page="catalogo-item"
          addToCart={this.addProductToCart}
        />
        <p className={classes.Cuerpo}>
          {this.props.selectedProduct.Descripcion}
        </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductoInfo);
