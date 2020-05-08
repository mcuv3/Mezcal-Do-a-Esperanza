import React, { Component } from "react";
import Productos from "../../Componentes/Catalogo/Productos";
import ProductosControl from "../../Componentes/Catalogo/ProdutosControl/ProductosControl";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ProductInfo from "./ProductoInfo/ProductoInfo";
import * as actions from "../../Store/Actions/Index";

export class Catalogo extends Component {
  componentDidMount() {
    this.props.fetchProducts();

    if (localStorage.getItem("productSelected") !== null) {
      const productSelected = localStorage.getItem("productSelected");
      this.selectProduct(JSON.parse(productSelected));
    } else {
      if (this.props.history.location.pathname.slice(10) !== "")
        this.props.fetchProduct(this.props.history.location.pathname.slice(10));
    }
  }

  selectProduct = (product) => {
    this.props.onSelectProduct(product);
    this.props.history.push("/catalogo/" + product.id);
  };

  addProductToCart = (product) => {
    this.props.onAddProductToCart({
      ...product,
      cantidad: 1,
    });
    this.props.history.push("/shop-car");
  };

  render() {
    let showProducts = (
      <React.Fragment>
        <ProductosControl />
        <Productos
          productos={this.props.products}
          selected={this.selectProduct}
          addToCart={this.addProductToCart}
        />
      </React.Fragment>
    );
    if (this.props.showProductInfo) {
      showProducts = (
        <Route
          path={this.props.match.path + "/" + this.props.idSelected}
          component={ProductInfo}
        />
      );
    }
    return showProducts;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.catalogo.products,
    idSelected: state.catalogo.productSelected.id,
    showProductInfo: state.catalogo.showProductInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectProduct: (product) =>
      dispatch(actions.onSelectProductHandler(product)),
    fetchProducts: () => dispatch(actions.fetchProductsFromDB()),
    onAddProductToCart: (product) =>
      dispatch(actions.addProductToCart(product)),
    fetchProduct: (id) => dispatch(actions.fetchProduct(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
