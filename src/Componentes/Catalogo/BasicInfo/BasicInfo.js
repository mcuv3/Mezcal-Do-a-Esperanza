import React from "react";
import productStyle from "./Product.css";
import catalogoStyle from "./Catalogo.css";
import Imagen from "../../UI/Image/Image";
import ImgProducto from "../../../Assets/producto.png";
import Boton from "../../UI/Botones/Boton";
import Quantity from "../../ShopCar/ShopItem/Quantity/Quantity";

const BasicInfo = (props) => {
  let newBotones = null;
  if (props.page === "catalogo-item") {
    newBotones = (
      <div
        className={[productStyle.BasicInfo, productStyle[props.page]].join(" ")}
      >
        <Imagen
          Alt={props.producto.Nombre}
          url={ImgProducto}
          width={props.imageWidth}
          height={props.imageHeight}
          click={props.click}
        />
        <div className={productStyle.Texto}>
          <h3 onClick={props.click}>{props.producto.Nombre}</h3>
          <div className={productStyle.Detalles}>
            <p> Seccion: {props.producto.seccion}</p>
            <p> Tipo: {props.producto.tipo} </p>
          </div>
          <p>${props.producto.Precio}</p>

          {props.producto.isInCar ? (
            <div className={productStyle.Mensaje}>
              Este Producto ya está en tu carrito
            </div>
          ) : (
            <React.Fragment>
              <Quantity
                cantidad={props.cantidad}
                changeCantidad={props.changeCantidad}
              />
              <Boton
                type="registrate"
                click={props.addToCart}
                disabled={props.producto.isInCar}
              >
                Agregar al Carrito
              </Boton>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  } else {
    newBotones = (
      <div className={catalogoStyle.Catalogo}>
        <Imagen
          Alt={props.producto.Nombre}
          url={ImgProducto}
          width={props.imageWidth}
          height={props.imageHeight}
          click={props.click}
        />
        <div className={catalogoStyle.Texto}>
          <div className={catalogoStyle.Detalles}>
            <h4 onClick={props.click}>{props.producto.Nombre}</h4>
            <p onClick={props.click}>${props.producto.Precio}</p>
          </div>

          <div className={catalogoStyle.Detalles2}>
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
              <i className="fas fa-shopping-cart"></i>
            </Boton>
          </div>
        </div>
      </div>
    );
  }
  return newBotones;
};

export default BasicInfo;
