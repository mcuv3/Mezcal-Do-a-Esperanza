import React from "react";
import classes from "./OrderSummary.css";
import SuccesAnimation from "../../UI/SuccessAnimation/SuccessAnimation";
import BotonNav from "../../UI/Botones/BotonNav";
import { withRouter } from "react-router-dom";

const OrderSummary = (props) => {
  return (
    <div className={classes.OrderSummary}>
      <SuccesAnimation />

      <h1>Agregado al Carrito con Éxito</h1>
      <p>No esperes mas !!!</p>

      <BotonNav type="ordered" path="/shop-car">
        Ir al carrito
      </BotonNav>
    </div>
  );
};

export default withRouter(OrderSummary);
