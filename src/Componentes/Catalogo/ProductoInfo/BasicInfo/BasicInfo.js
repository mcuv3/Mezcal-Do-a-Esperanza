import React from "react";
import classes from "./BasicInfo.css";
import Imagen from "../../../UI/Image/Image";
import ImgProducto from "../../../../Assets/producto.png";
import Boton from "../../../UI/Botones/Boton";

const BasicInfo = (props) => {
  let estilo = [classes.BasicInfo];
  let newBotones = null;
  switch (props.page) {
    case "catalogo":
      estilo.push(classes.Catalogo);
      break;
    case "catalogo-item":
      estilo.push(classes.Item);
      newBotones = (
        <div className={classes.Cantidad}>
          <button onClick={props.less}>-</button>
          <p> {props.cantidad} </p>
          <button onClick={props.add}>+</button>
        </div>
      );
      break;
    case "carrito":
      estilo.push(classes.Carrito);
      break;
  }
  return (
    <div className={estilo.join(" ")}>
      <Imagen
        Alt={props.producto.Nombre}
        url={ImgProducto}
        width={props.imageWidth}
        height={props.imageHeight}
        click={props.click}
      />
      <div className={classes.Texto}>
        <h3 onClick={props.click}>{props.producto.Nombre}</h3>
        <div className={classes.Detalles} onClick={props.click}>
          <p> Seccion: {props.producto.seccion}</p>
          <p>Tipo: {props.producto.tipo} </p>
        </div>
        <p onClick={props.click}>${props.producto.Precio}</p>
        {newBotones}
        <Boton type="registrate" click={props.addToCart}>
          Agregar al Carrito
        </Boton>
      </div>
    </div>
  );
};

export default BasicInfo;
