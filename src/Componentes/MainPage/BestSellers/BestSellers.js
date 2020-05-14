import React from "react";
import classes from "./BestSellers.css";
import Procutos from "../../Catalogo/Productos";

const BestSellers = (props) => {
  return (
    <div className={classes.BestSellers}>
      <h1>Nuestros Mejores Articulos</h1>
      <Procutos
        productos={props.products}
        selected={props.redirect}
        addToCart={props.redirect}
      />
    </div>
  );
};

export default BestSellers;
