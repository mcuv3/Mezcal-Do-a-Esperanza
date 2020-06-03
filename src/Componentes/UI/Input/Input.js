import React from "react";
import classes from "./Input.css";

const Input = (props) => {
  let classesNames = [classes.Input];
  switch (props.estilo) {
    case "text":
      classesNames.push(classes.Text);
    default:
      classesNames.push(classes.Text);
  }

  return (
    <input
      className={classesNames.join(" ")}
      placeholder={props.placeholder}
      onChange={props.change}
      value={props.value}
      {...props.config}
    />
  );
};

export default Input;
