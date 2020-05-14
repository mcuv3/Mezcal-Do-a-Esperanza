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
  purchaseCart = () => {
    console.log({
      productsSold: this.props.productsInCart,
      ticket: this.props.cartPriceSummary,
    });
  };
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
          cartPriceSummary={this.props.cartPriceSummary}
          Purchase={this.purchaseCart}
          deleteProduct={this.deleteProduct}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartPriceSummary: state.shopcart.cartPriceSummary,
    productsInCart: state.shopcart.productsToShop,
    productsCatalgo: state.catalogo.products,
    loading: state.shopcart.loading,
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
