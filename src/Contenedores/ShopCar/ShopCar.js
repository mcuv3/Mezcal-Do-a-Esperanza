import React, { Component } from "react";
import { connect } from "react-redux";
import ProductsToShop from "../../Componentes/ShopCar/ShopProduts";
import * as actions from "../../Store/Actions/Index";

export class ShopCar extends Component {
  componentDidMount() {
    this.props.onFetchProductsInCart(this.props.productsCatalgo);
  }

  changeCantidad = (id, operation) => {
    this.props.onChangeQuantity(id, operation);
  };
  purchaseCart = () => {};
  deleteProduct = (product) => this.props.onDeleteProduct(product);

  render() {
    return (
      <div
        style={{
          marginTop: "7em",
          display: "flex",
          margin: "auto",
          justifyContent: "center",
        }}
      >
        <ProductsToShop
          productsToShop={this.props.productsInCart}
          changeCantidad={this.changeCantidad}
          Purchase={this.purchaseCart}
          deleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsInCart: state.shopcart.productsToShop,
    productsCatalgo: state.catalogo.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProductsInCart: (productsCatalgo) =>
      dispatch(actions.fetchProductsInCart(productsCatalgo)),
    onDeleteProduct: (product) =>
      dispatch(actions.removeProductFromCart(product)),
    onChangeQuantity: (id, operation) =>
      dispatch(actions.changeProductQuantity(id, operation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCar);
