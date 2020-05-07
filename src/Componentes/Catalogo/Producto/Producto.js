import React from "react";

import BasicInfo from "../ProductoInfo/BasicInfo/BasicInfo";

const Producto = (props) => {
  return (
    <BasicInfo
      imageWidth="100%"
      imageHeight="300px"
      producto={props.producto}
      page="catalogo"
      click={props.selected}
      addToCart={props.addToCart}
    />
  );
};

export default Producto;
