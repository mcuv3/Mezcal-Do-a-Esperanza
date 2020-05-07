import React, { Component } from "react";
import Productos from "../../Componentes/Catalogo/Productos";
import ProductosControl from "../../Componentes/Catalogo/ProdutosControl/ProductosControl";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/Index";

export class Catalogo extends Component {
  state = {
    idSelected: null,
  };
  componentDidMount() {
    this.props.fetchProduct();
  }

  selectProduct = (product) => {
    this.props.onSelectProduct(product);
    this.props.history.push("/catalogo/" + product.id);
  };

  addProductToCart = (product) => {
    this.props.onAddProductToCart({ id: product.id, cantidad: 1 });
    this.props.history.push("/shop-car");
    console.log(product);
  };

  render() {
    console.log(this.state.idSelected);
    return (
      <React.Fragment>
        <ProductosControl />
        <Productos
          productos={this.props.products}
          selected={this.selectProduct}
          addToCart={this.addProductToCart}
        />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.catalogo.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectProduct: (product) =>
      dispatch(actions.onSelectProductHandler(product)),
    fetchProduct: () => dispatch(actions.fetchProductsFromDB()),
    onAddProductToCart: (product) =>
      dispatch(actions.addProductToCart(product)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Catalogo);
