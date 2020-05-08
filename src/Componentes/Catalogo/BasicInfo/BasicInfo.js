import React from "react";
import classes from "./BasicInfo.css";
import Imagen from "../../UI/Image/Image";
import ImgProducto from "../../../Assets/producto.png";
import Boton from "../../UI/Botones/Boton";

const BasicInfo = (props) => {
  let estilo = [classes.BasicInfo];
  let newBotones = null;
  switch (props.page) {
    case "catalogo":
      estilo.push(classes.Catalogo);
      newBotones = (
        <Boton
          type="registrate"
          click={props.addToCart}
          disabled={props.producto.isInCar}
        >
          {props.producto.isInCar ? "En Carrito" : "Agregar al Carrito"}
        </Boton>
      );
      break;
    case "catalogo-item":
      estilo.push(classes.Item);
      newBotones = (
        <React.Fragment>
          <div className={classes.Cantidad}>
            <button onClick={props.less}>-</button>
            <p> {props.cantidad} </p>
            <button onClick={props.add}>+</button>
          </div>
          <Boton
            type="registrate"
            click={props.addToCart}
            disabled={props.producto.isInCar}
          >
            {props.producto.isInCar ? "En Carrito" : "Agregar al Carrito"}
          </Boton>
        </React.Fragment>
      );
      break;
    default:
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
          <p> Tipo: {props.producto.tipo} </p>
        </div>
        <p onClick={props.click}>${props.producto.Precio}</p>
        {newBotones}
      </div>
    </div>
  );
};

export default BasicInfo;
