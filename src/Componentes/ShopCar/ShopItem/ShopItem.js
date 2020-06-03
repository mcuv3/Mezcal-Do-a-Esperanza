import React, { useState } from "react";
import classes from "./ShopItem.css";
import { Link } from "react-router-dom";
import Quantity from "./Quantity/Quantity";
import { useSpring, animated } from "react-spring";

const ShopItem = (props) => {
  const [show, setShow] = useState(false);
  const sty = useSpring({
    opacity: show ? 1 : 0,
    height: show ? "85px" : "0px",
  });
  console.log(show);
  return (
    <React.Fragment>
      <div className={classes.ShopItem}>
        <div className={classes.More}>
          <i
            className="fas fa-chevron-up"
            onClick={() => setShow(!show)}
            style={{ transform: show ? "rotate(180deg)" : null }}
          ></i>
        </div>
        <p className={classes.ProductName}>
          <Link to={`catalogo/${props.productToShop.id}`}>
            {props.productToShop.Nombre}
          </Link>
        </p>
        <Quantity
          cantidad={props.productToShop.cantidad}
          changeCantidad={props.changeCantidad}
        />
        <p className={classes.Precio}>
          ${props.productToShop.Precio * props.productToShop.cantidad}
        </p>

        <div className={classes.More} style={{ backgroundColor: "#d17878" }}>
          <i className="fas fa-backspace" onClick={props.deleteProduct}></i>
        </div>
      </div>
      {/* <animated.div style={sty}>
        <div className={classes.MoreInfo}>
          <p>{props.productToShop.Descripcion.slice(0, 150)} ....</p>
        </div>
      </animated.div> */}
    </React.Fragment>
  );
};

export default ShopItem;
