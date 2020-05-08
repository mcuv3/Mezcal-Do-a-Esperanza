import React, { Component } from "react";
import classes from "./AddProducto.css";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/Index";
class AddProduct extends Component {
  state = {
    product: {
      Nombre: "",
      seccion: "",
      tipo: "",
      Descripcion: "",
      Precio: "",
      Imagen: null,
    },
  };

  onChangeHandler = (event, tipo) => {
    const product = { ...this.state.product };
    product[tipo] = event.target.value;
    this.setState({ product });
  };
  onChangeImage = (event, tipo) => {
    const product = { ...this.state.product };
    product[tipo] = event.target.files[0];
    this.setState({ product });
  };

  addNewProduct = (event) => {
    event.preventDefault();
    this.props.onAddProduct(this.state.product);
  };

  render() {
    console.log(this.state.product);
    return (
      <div className={classes.AddProduct}>
        <form className={classes.Inputs} onSubmit={this.addNewProduct}>
          <input
            type="text"
            placeholder="Nombre del Producto"
            onChange={(event) => this.onChangeHandler(event, "Nombre")}
            value={this.state.product.Nombre}
          />
          <input
            type="text"
            placeholder="Seccion"
            onChange={(event) => this.onChangeHandler(event, "seccion")}
            value={this.state.product.seccion}
          />
          <input
            type="text"
            placeholder="Tipo"
            onChange={(event) => this.onChangeHandler(event, "tipo")}
            value={this.state.product.tipo}
          />
          <textarea
            type="text"
            placeholder="Descripcion"
            onChange={(event) => this.onChangeHandler(event, "Descripcion")}
            value={this.state.product.Descripcion}
          />
          <input
            type="text"
            placeholder="Precio"
            onChange={(event) => this.onChangeHandler(event, "Precio")}
            value={this.state.product.Precio}
          />
          <input
            type="file"
            placeholder="Precio"
            onChange={(event) => this.onChangeImage(event, "Imagen")}
          />
          <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (product) => dispatch(actions.onAddNewProduct(product)),
  };
};
export default connect(null, mapDispatchToProps)(AddProduct);
