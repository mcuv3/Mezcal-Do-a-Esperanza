import React from "react";
import classes from "./Productos.css";
import Producto from "./Producto/Producto";

const Productos = (props) => {
  return (
    <div className={classes.Contenedor}>
      <div className={classes.Productos}>
        {props.productos.map((producto) => {
          return (
            <Producto
              key={producto.id}
              producto={producto}
              selected={() => props.selected(producto)}
              addToCart={() => props.addToCart(producto)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
