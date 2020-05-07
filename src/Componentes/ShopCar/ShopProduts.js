import React from "react";
import ShopItem from "./ShopItem/ShopItem";

function ShopProducts(props) {
  return (
    <div>
      {props.productsToShop.map((product) => {
        return (
          <ShopItem
            key={product.id}
            productToShop={product}
            cantidad={product.cantidad}
          />
        );
      })}
    </div>
  );
}

export default ShopProducts;
