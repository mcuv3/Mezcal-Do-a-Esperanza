import React from "react";
import classes from "./About.css";
import Logo from "../../Navegation/logo/logo";

function About() {
  return (
    <React.Fragment>
      <div className={classes.About}>
        <div className={classes.Text}>
          <Logo width="200px" height="200px" />
          <h1>Somos Mezacales Doña Esperanza</h1>

          <p>
            Somos una sociedad conformada por productores rurales y nos
            dedicamos a la producción y comercialización de mezcales
            tradicionales oaxaqueños de diversas regiones y variedades del
            estado de Oaxaca.
          </p>
          <p>
            Compartimos la cultura y tradición de los diferentes agaves, donde
            con un concepto ecléctico fusionamos el arte y el mezcal en un
            espacio para degustar una amplia variedad de mezcales silvestres.
          </p>

          <p>
            El conocimiento es algo que no se aprende de un día para otro;
            debido a esto en esta sección podrás encontrar y acceder a
            información referente a diferentes temas de interés en torno a la
            cultura maguey-mezcal.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
