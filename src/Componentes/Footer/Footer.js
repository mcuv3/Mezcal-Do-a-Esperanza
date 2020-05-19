import React from "react";
import classes from "./Style.css";
import Logo from "../Navegation/logo/logo";
import { Link } from "react-router-dom";

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
            <Link to="/" href="#" className={classes["link-1"]}>
              Home
            </Link>

            <Link to="/" href="#">
              Blog
            </Link>

            <Link to="/" href="#">
              Precios
            </Link>

            <Link to="/" href="#">
              Acerca De
            </Link>

            <Link to="/" href="#">
              FAQ
            </Link>
          </p>

          <p className={classes["footer-company-name"]}>
            Mezcal DoñaEsperanza © 2020
          </p>
          <p className={classes["footer-company-name"]}>
            Powered by React, developed by{" "}
            <strong>
              <Link to="/" href="https://github.com/MauricioAntonioMartinez">
                mcuve
              </Link>
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
              <Link to="/" href="mailto:support@company.com">
                info@mezcaldoñaesperanza.com
              </Link>
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
            <Link to="/" href="#">
              <i className="fa fa-facebook"></i>
            </Link>
            <Link to="/" href="#">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="/" href="#">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="/" href="#">
              <i className="fa fa-github"></i>
            </Link>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
