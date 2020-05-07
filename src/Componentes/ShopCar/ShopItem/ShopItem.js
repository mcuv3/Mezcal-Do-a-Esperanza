import React from "react";
import BasicInfo from "../../Catalogo/ProductoInfo/BasicInfo/BasicInfo";

const ShopItem = (props) => {
  return (
    <div>
      <BasicInfo
        imageWidth="300px"
        imageHeight="300px"
        producto={props.productToShop}
        cantidad={props.cantidad}
        add={() => this.changeCantidad(1)}
        less={() => this.changeCantidad(0)}
        page="catalogo-item"
      />
    </div>
  );
};

export default ShopItem;
