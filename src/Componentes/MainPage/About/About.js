import React from "react";
import classes from "./About.css";
import Logo from "../../Navegation/logo/logo";

function About() {
  return (
    <React.Fragment>
      <div className={classes.About}>
        <div className={classes.Text}>
          <Logo width="200px" height="200px" />
          <h1>Somos Mezacales Dona Esperanza</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet
            ipsa totam aut perspiciatis pariatur! Enim est quas, quae sit
            veritatis itaque reiciendis ut, repellat molestiae eum eaque
            voluptatem, quasi ab distinctio sapiente laborum velit similique.
            Quod distinctio asperiores sapiente, eveniet saepe error inventore,
            tenetur adipisci fugit, assumenda nobis aliquid. Voluptates numquam
            nemo libero laboriosam ipsa, quam quibusdam, ullam error, quaerat
            rem unde eos magnam mollitia perferendis at incidunt. Saepe ullam v
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
