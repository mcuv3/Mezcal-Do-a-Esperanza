import React from "react";
import img from "../../../Assets/logo.png";
const logo = (props) => {
  return (
    <img
      src={img}
      alt="log"
      style={{ width: props.width, height: props.height }}
    />
  );
};

export default logo;
