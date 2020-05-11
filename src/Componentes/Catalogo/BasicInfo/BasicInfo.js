import React from "react";
import info from "./BasicInfo.css";
import classes from "./Catalogo.css";
import Imagen from "../../UI/Image/Image";
import ImgProducto from "../../../Assets/producto.png";
import Boton from "../../UI/Botones/Boton";

const BasicInfo = (props) => {
  let newBotones = null;
  if (props.page === "catalogo-item") {
    newBotones = (
      <div className={[info.BasicInfo, info[props.page]].join(" ")}>
        <Imagen
          Alt={props.producto.Nombre}
          url={ImgProducto}
          width={props.imageWidth}
          height={props.imageHeight}
          click={props.click}
        />
        <div className={info.Texto}>
          <h3 onClick={props.click}>{props.producto.Nombre}</h3>
          <div className={info.Detalles}>
            <p> Seccion: {props.producto.seccion}</p>
            <p> Tipo: {props.producto.tipo} </p>
          </div>
          <p>${props.producto.Precio}</p>
          <div className={info.Cantidad}>
            <i className="fas fa-minus" onClick={props.less}></i>
            {"  " + props.cantidad + "  "}
            <i className="fas fa-plus" onClick={props.add}></i>
          </div>
          <Boton
            type="registrate"
            click={props.addToCart}
            disabled={props.producto.isInCar}
          >
            {props.producto.isInCar ? "En Carrito" : "Agregar al Carrito"}
          </Boton>
        </div>
      </div>
    );
  } else {
    newBotones = (
      <div className={classes.Catalogo}>
        <Imagen
          Alt={props.producto.Nombre}
          url={ImgProducto}
          width={props.imageWidth}
          height={props.imageHeight}
          click={props.click}
        />
        <div className={classes.Texto}>
          <div className={classes.Detalles}>
            <h4 onClick={props.click}>{props.producto.Nombre}</h4>
            <p onClick={props.click}>${props.producto.Precio}</p>
          </div>

          <div className={classes.Detalles2}>
            <div>
              <p> Seccion: {props.producto.seccion}</p>
              <p> Tipo: {props.producto.tipo} </p>
            </div>
            <span>{props.producto.isInCar ? "En carrito" : null}</span>
            <Boton
              type="catalogo"
              click={props.addToCart}
              disabled={props.producto.isInCar}
            >
              <i class="fas fa-shopping-cart"></i>
            </Boton>
          </div>
        </div>
      </div>
    );
  }
  return newBotones;
};

export default BasicInfo;
