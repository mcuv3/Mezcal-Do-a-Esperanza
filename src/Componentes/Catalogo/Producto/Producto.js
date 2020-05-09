import React from "react";

import BasicInfo from "../BasicInfo/BasicInfo";

const Producto = (props) => {
  return (
    <BasicInfo
      imageWidth="100%"
      imageHeight="300px"
      producto={props.producto}
      page="Catalogo"
      click={props.selected}
      addToCart={props.addToCart}
    />
  );
};

export default Producto;
