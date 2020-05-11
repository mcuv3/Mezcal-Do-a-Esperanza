import React from "react";
import classes from "./Modal.css";
import BackDrop from "../BackDrop/BackDrop";

const Modal = (props) => {
  return props.show ? (
    <BackDrop show>
      <div className={classes.Modal}>
        <div className={classes.Controls}>
          <i className="fas fa-times" onClick={props.close}></i>
        </div>
        {props.children}
      </div>
    </BackDrop>
  ) : null;
};

export default Modal;
