import React from "react";
import classes from "./Location.css";

const Location = (props) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d394.7639486060454!2d-101.18334541849636!3d19.72757209373125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9ca76209199da49d!2sPlaza%20Pabell%C3%B3n!5e0!3m2!1ses-419!2smx!4v1589438896803!5m2!1ses-419!2smx"
      height="350"
      frameborder="0"
      style={{ border: "0", width: "100%" }}
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></iframe>
  );
};

export default Location;
