import React from "react";
import classes from "./ProductosControl.css";

const ProductosControl = (props) => {
  return (
    <div className={classes.Controls}>
      <select>
        <option value="Todos">Todos</option>
        <option value="Mezcales">Mezcales</option>
        <option value="Salsas">Salsas</option>
        <option value="Otros">Otros</option>
      </select>
    </div>
  );
};

export default ProductosControl;
