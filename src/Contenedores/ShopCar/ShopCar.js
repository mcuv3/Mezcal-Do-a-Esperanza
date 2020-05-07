import React, { Component } from "react";
import { connect } from "react-redux";
import ProductsToShop from "../../Componentes/ShopCar/ShopProduts";
import ProductsToShopInfo from "../../Componentes/ShopCar/ShopInfo/ShopInfo";
import * as actions from "../../Store/Actions/Index";

export class ShopCar extends Component {
  componentDidMount() {
    this.props.onFetchProductsInCart(this.props.productsCatalgo);
    console.log(this.props.productsCatalgo);
  }

  render() {
    console.log(this.props.products);
    return (
      <div
        style={{
          display: "flex",
          width: "85%",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <ProductsToShop productsToShop={this.props.productsInCart} />
        <ProductsToShopInfo />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopCar);
