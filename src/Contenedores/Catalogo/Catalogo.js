import React, { Component } from "react";
import Productos from "../../Componentes/Catalogo/Productos";
import ProductosControl from "../../Componentes/Catalogo/ProdutosControl/ProductosControl";
import { connect } from "react-redux";
import * as actions from "../../Store/Actions/Index";

export class Catalogo extends Component {
  state = {
    Productos: {
      Mezcales: [
        {
          id: 1,
          nombre: "Botella de Mezacal",
          descripcion: "Una la del mchuga de maguey que están ",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
        {
          id: 2,
          nombre: "Botella de Mezacal",
          descripcion: "Esta es una botella muy rica de mezcal",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
        {
          id: 3,
          nombre: "Botella de Mezacal",
          descripcion: "Esta es una botella muy rica de mezcal",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
        {
          id: 4,
          nombre: "Botella de Mezacal",
          descripcion: "Esta es una botella muy rica de mezcal",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
        {
          id: 5,
          nombre: "Botella de Mezacal",
          descripcion: "Esta es una botella muy rica de mezcal",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
        {
          id: 6,
          nombre: "Botella de Mezacal",
          descripcion: "Esta es una botella muy rica de mezcal",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
        {
          id: 7,
          nombre: "Botella de Mezacal",
          descripcion: "Esta es una botella muy rica de mezcal",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
        {
          id: 8,
          nombre: "Botella de Mezacal",
          descripcion: "Esta es una botella muy rica de mezcal",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
        {
          id: 9,
          nombre: "Botella de Mezacal",
          descripcion: "Esta es una botella muy rica de mezcal",
          tipo: "Mezacal de Gusano",
          precio: 250,
        },
      ],
      Salsas: [
        {
          id: 1,
          nombre: "Salsa en Polvo de Chapulin",
          descripcion: "Esta es una salsa muy rica de chapulin",
          tipo: "Picante",
          precio: 150,
        },
      ],
    },
    idSelected: null,
  };

  selectProduct = (id) => {
    this.props.onSelectProduct(id);
    this.props.history.push("/productos/" + id);
  };

  render() {
    console.log(this.state.idSelected);
    return (
      <div>
        <ProductosControl />
        <Productos
          productos={this.state.Productos.Mezcales}
          selected={this.selectProduct}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSelectProduct: (id) => dispatch(actions.onSelectProductHandler(id)),
  };
};
export default connect(null, mapDispatchToProps)(Catalogo);
