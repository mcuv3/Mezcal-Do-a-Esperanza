import React from "react";
import back from "../../Assets/back.jpg";
import classes from "./Presentacion.css";
import Boton from "../UI/Botones/BotonNav";

const Presentacion = () => {
  return (
    <React.Fragment>
      <div
        className={classes.Presentacion}
        // style={{ backgroundImage: `url(${back})` }}
      >
        <div className={classes.Contenido}>
          <h1>El mejor mezcal de todo mexico</h1>
          <p>
            "Para todo mal mezcal para todo bien tambien y si no hay remedio
            litro y medio."
          </p>
          <div>
            <Boton type="registrate">Registrate</Boton>
            <Boton type="logeate">Inicia Sesion</Boton>
          </div>
        </div>
        <img src={back} alt="img" className={classes.back} />
      </div>
    </React.Fragment>
  );
};

export default Presentacion;
