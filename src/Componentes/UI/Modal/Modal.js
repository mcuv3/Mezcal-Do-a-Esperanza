import React from "react";
import classes from "./Modal.css";
import BackDrop from "../BackDrop/BackDrop";
import Spinner from "../Spinner/Spinner";

const Modal = (props) => {
  return props.show ? (
    <BackDrop show>
      <div className={classes.Modal}>
        <div className={classes.Controls}>
          <i class="fas fa-times"></i>
        </div>
        {props.children}
      </div>
    </BackDrop>
  ) : null;
};

export default Modal;
