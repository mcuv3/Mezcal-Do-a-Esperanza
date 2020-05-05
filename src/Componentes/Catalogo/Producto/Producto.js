import React from "react";
import classes from "./Producto.css";
import Boton from "../../UI/Botones/Boton";
import ImgProducto from "../../../Assets/producto.png";

const Producto = (props) => {
  return (
    <div className={classes.Producto} onClick={props.selected}>
      <img src={ImgProducto} alt="Mezcal" className={classes.Imagen} />
      <div className={classes.Texto}>
        <h2>{props.titulo}</h2>
        {/* <p>{props.descripcion}</p> */}
        <p>${props.precio}</p>
        <Boton type="registrate">Agregar al Carrito</Boton>
      </div>
    </div>
  );
};

export default Producto;
