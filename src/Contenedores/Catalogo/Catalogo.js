import React, { Component } from "react";
import Productos from "../../Componentes/Catalogo/Productos";
import ProductosControl from "../../Componentes/Catalogo/ProdutosControl/ProductosControl";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import ProductInfo from "./ProductoInfo/ProductoInfo";
import * as actions from "../../Store/Actions/Index";
import Modal from "../../Componentes/UI/Modal/Modal";
import OrderSummary from "../../Componentes/CheckOut/OrderSummary/OrderSummary";
import Spinner from "../../Componentes/UI/Spinner/Spinner";

export class Catalogo extends Component {
  state = {
    show: false,
  };
  componentDidMount() {
    if (localStorage.getItem("productSelected") !== null) {
      const productSelected = localStorage.getItem("productSelected");
      this.selectProduct(JSON.parse(productSelected));
    } else {
      if (this.props.history.location.pathname.slice(10) !== "") {
        this.props.fetchProduct(this.props.history.location.pathname.slice(10));
      } else {
        this.props.fetchProducts();
      }
    }
    console.log("err");
  }
  componentDidUpdate() {
    if (
      this.props.products.length === 0 &&
      this.props.history.location.pathname.slice(10) === ""
    )
      this.props.fetchProducts();
  }
  selectProduct = (product) => {
    this.props.onSelectProduct(product);

    this.props.history.push("/catalogo/" + product.id);
  };

  addProductToCart = (product, cant) => {
    console.log(product, cant);
    this.props.onAddProductToCart({
      ...product,
      cantidad: cant ? cant : 1,
    });
    this.props.onSelectProduct(product);
    this.setState({ show: true });
    //this.props.history.push("/shop-car");
  };

  close_open_Modal = (show) => this.setState({ show });

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
          path={this.props.match.path + "/" + this.props.selectedProduct.id}
          component={() => (
            <ProductInfo
              addProduct={this.addProductToCart}
              selectedProduct={this.props.selectProduct}
            />
          )}
        />
      );
    }
    if (this.props.error)
      return (
        <h1 style={{ textAlign: "center" }}>Oups, Something went wrong</h1>
      );
    return (
      <React.Fragment>
        {showProducts}
        <Modal
          show={this.state.show}
          close={() => this.close_open_Modal(false)}
        >
          {this.props.loading ? (
            <Spinner />
          ) : (
            <OrderSummary product={this.props.selectProduct} />
          )}
        </Modal>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.catalogo.products,
    selectedProduct: state.catalogo.productSelected,
    showProductInfo: state.catalogo.showProductInfo,
    error: state.catalogo.error,
    loading: state.shopcart.loading,
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
