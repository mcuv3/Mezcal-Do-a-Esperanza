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
              titulo={producto.nombre}
              descripcion={producto.descripcion}
              precio={producto.precio}
              selected={() => props.selected(producto.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Productos;
