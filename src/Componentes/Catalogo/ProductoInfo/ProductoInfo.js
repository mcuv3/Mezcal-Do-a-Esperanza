import React, { Component } from "react";
import classes from "./ProductoInfo.css";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/Index";
import BasicInfo from "./BasicInfo/BasicInfo";

class ProductoInfo extends Component {
  state = {
    cantidad: 1,
  };

  componentDidMount() {
    if (this.props.selectedProduct.length === 0) {
      this.props.fetchProduct(this.props.history.location.pathname.slice(10));
      this.props.history.push(
        "/catalogo/" + this.props.history.location.pathname.slice(10)
      );
    }
  }
  componentWillUnmount() {
    this.props.onUnSelectProduct();
  }
  reRenderProduct = () => {
    const product = this.props.products.filter(
      (p) => p.id === this.props.history.location.pathname.slice(10)
    );
    this.props.onSelectedProduct(product);
    this.setState({ isProduct: true });
  };
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
    this.props.onAddProductToCart({
      id: this.props.selectedProduct.id,
      cantidad: this.state.cantidad,
    });
  };

  render() {
    return (
      <div className={classes.ProductInfo}>
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
    products: state.catalogo.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onUnSelectProduct: () => dispatch(actions.onUnSelectProduct()),
    onSelectedProduct: (id) => dispatch(actions.onSelectProductHandler(id)),
    onAddProductToCart: (product) =>
      dispatch(actions.addProductToCart(product)),
    fetchProduct: (id) => dispatch(actions.fetchProduct(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductoInfo);
