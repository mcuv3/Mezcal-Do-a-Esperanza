import React, { useState, useCallback } from "react";
import classes from "./ProductosControl.css";
import Search from "../../UI/Search/Search";
import DropDown from "../../Navegation/NavegationComponents/NavegationDropDown/NavegatioDropDown";
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions/Index";
import { withRouter } from "react-router-dom";

const links = [
  { path: "/catalogo", text: "Todos" },
  { path: "/catalogo/Mezcal", text: "Mezcales" },
  { path: "/catalogo/Sabor", text: "Mezcal de Sabor" },
  { path: "/catalogo/Licor", text: "Licor de Mezcal" },
  { path: "/catalogo/Sal y Salsas", text: "Sal y Salsas" },
  { path: "/catalogo/Otros", text: "Extras" },
];
const ProductosControl = React.memo((props) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const filterProducts = useCallback(
    (productName) => {
      if (props.history.location.pathname.slice(10) === "") {
        props.onFilterProduct(productName);
      }
    },
    [props]
  );

  return (
    <div className={classes.Controls}>
      <Search change={filterProducts} />
      <div>
        <div className={classes.Seleccion}>
          Secciones
          <i
            className="fas fa-caret-down"
            onClick={() => {
              setShowDropDown(!showDropDown);
            }}
          ></i>
        </div>
        {showDropDown ? (
          <DropDown
            links={links}
            clicked={() => {
              setShowDropDown(!showDropDown);
            }}
          />
        ) : null}
      </div>
    </div>
  );
});
const mapDispatchToProps = (dispatch) => {
  return {
    onFilterProduct: (productName) =>
      dispatch(actions.filterProducts(productName, true)),
  };
};

export default connect(null, mapDispatchToProps)(withRouter(ProductosControl));
