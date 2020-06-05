import React, { useState } from "react";
import classes from "./CheckOut.css";
import PayPal from "./Paypal/Paypal";
import SuccessAnimation from "../../Componentes/UI/SuccessAnimation/SuccessAnimation";
import Spinner from "../UI/Spinner/Spinner";

const CheckOut = (props) => {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const orderFinish = () => {
    props.placed();
    setSuccess(true);
  };

  let order = (
    <React.Fragment>
      <label htmlFor="Nombre">
        Enviar a: {props.userData.Nombre} - {props.userData.Apellido}
      </label>
      <label htmlFor="Direccion">
        Dirección: {props.userData.Calle} {props.userData.Colonia}
      </label>
      <label htmlFor="Estado">
        {props.userData.Estado} {props.userData.Ciudad}
      </label>
      <label htmlFor="CP" className={classes.cp}>
        Codigo Postal:{props.userData.CodigoPostal}
      </label>
      <div className={classes.payPalButton}>
        <PayPal
          success={orderFinish}
          error={orderFinish}
          botonReady={() => setLoading(false)}
        />
      </div>
    </React.Fragment>
  );
  if (success) {
    order = (
      <React.Fragment>
        <SuccessAnimation />
        <h2>Operación exitosa, gracias por tu comprar.</h2>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.Info}>
      {order}
      {loading && <Spinner />}
    </div>
  );
};

export default CheckOut;
