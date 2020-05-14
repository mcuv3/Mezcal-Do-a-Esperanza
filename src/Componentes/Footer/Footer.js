import React from "react";
import classes from "./Style.css";
import Logo from "../Navegation/logo/logo";

const Footer = (props) => {
  return (
    <React.Fragment>
      <div className={classes.Block}>
        <section></section>
      </div>
      <footer className={classes["footer-distributed"]}>
        <div className={classes["footer-left"]}>
          <h3>
            <Logo width="100px" height="100px" />
          </h3>

          <p className={classes["footer-links"]}>
            <a href="#" className={classes["link-1"]}>
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Precios</a>

            <a href="#">Acerca De</a>

            <a href="#">FAQ</a>
          </p>

          <p className={classes["footer-company-name"]}>
            Mezcal DoñaEsperanza © 2020
          </p>
          <p className={classes["footer-company-name"]}>
            Powered by React, developed by{" "}
            <strong>
              <a href="https://github.com/MauricioAntonioMartinez">mcuve</a>
            </strong>
          </p>
        </div>

        <div className={classes["footer-center"]}>
          <div>
            <i className={classes["fa fa-map-marker"]}></i>
            <p>
              <span>Plaza Pebellón Morelos Nte 1923A</span> Morelia, Michoacán
            </p>
          </div>

          <div>
            <i className={classes["fa fa-phone"]}></i>
            <p>+52 443 378 7404</p>
          </div>

          <div>
            <i className={classes["fa fa-envelope"]}></i>
            <p>
              <a href="mailto:support@company.com">
                info@mezcaldoñaesperanza.com
              </a>
            </p>
          </div>
        </div>

        <div className={classes["footer-right"]}>
          <p className={classes["footer-company-about"]}>
            <span>Acerca de la Mezacaleria</span>
            Una de las mejores mezacalerias en todo México con esquisitos
            manajares tales como mezcales, salsa y demás.
          </p>

          <div className={classes["footer-icons"]}>
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
