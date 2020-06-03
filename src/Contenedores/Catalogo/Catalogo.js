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
import NavPages from "../../Componentes/Catalogo/NavPages/NavPages";

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
        switch (this.props.history.location.pathname.slice(10)) {
          case "Mezcal":
          case "Sabor":
          case "Licor":
          case "Sal y Salsas":
          case "Otros":
            localStorage.setItem(
              "Seccion",
              this.props.history.location.pathname.slice(10)
            );
            this.props.onFilterBySection(
              this.props.history.location.pathname.slice(10),
              false
            );
            break;
          default:
            this.props.fetchProduct(
              this.props.history.location.pathname.slice(10)
            );
            break;
        }
      }
    }
  }
  componentDidUpdate() {
    if (
      this.props.history.location.pathname.slice(10) !== "" &&
      localStorage.getItem("Seccion") !==
        this.props.history.location.pathname.slice(10)
    ) {
      if (this.props.selectedProduct.length === 0) {
        localStorage.setItem(
          "Seccion",
          this.props.history.location.pathname.slice(10)
        );
        this.props.onFilterBySection(
          this.props.history.location.pathname.slice(10),
          false
        );
      }
    }
  }
  componentWillUnmount() {
    localStorage.removeItem("Seccion");
  }

  selectProduct = (product) => {
    this.props.onSelectProduct(product);
    this.props.history.push("/catalogo/" + product.id);
  };

  addProductToCart = (product, cant) => {
    this.props.onAddProductToCart({
      ...product,
      cantidad: cant ? cant : 1,
    });
    this.setState({ show: true });
  };

  close_open_Modal = (show) => {
    this.setState({ show });
    this.props.onFilterBySection("", true);
  };

  render() {
    let showProducts = (
      <React.Fragment>
        <ProductosControl />
        {this.props.products.length === 0 ? (
          <h1 style={{ textAlign: "center" }}>Oops, no tenemos ese producto</h1>
        ) : (
          <React.Fragment>
            <Productos
              productos={this.props.products}
              selected={this.selectProduct}
              addToCart={this.addProductToCart}
            />
            <NavPages
              page={+this.props.page}
              change={(direction) => this.props.onChangePage(direction)}
              maxPage={this.props.maxPage}
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
    if (this.props.showProductInfo) {
      showProducts = (
        <Route
          path={this.props.match.path + "/:id"}
          exact
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
      return <h1 style={{ textAlign: "center" }}>Oops, Algo salió mal</h1>;

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
    products: state.catalogo.products[state.catalogo.page],
    maxPage: state.catalogo.products.length,
    page: state.catalogo.page,
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
    onAddProductToCart: (product) =>
      dispatch(actions.addProductToCart(product)),
    fetchProduct: (id) => dispatch(actions.fetchProduct(id)),
    onFilterBySection: (seccion, isSearch) =>
      dispatch(actions.filterProducts(seccion, isSearch)),
    onChangePage: (direction) =>
      dispatch(actions.onChangePageCatalog(direction)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
