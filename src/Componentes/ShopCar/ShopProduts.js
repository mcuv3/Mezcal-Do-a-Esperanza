import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import classes from "./ShopProducts.css";
import Boton from "../UI/Botones/Boton";
import ShopInfo from "./ShopInfo/ShopInfo";
import logo from "../../Assets/logo.png";

function ShopProducts(props) {
  return (
    <div className={classes.Checkout}>
      <div className={classes.Cabeza}>
        <div className={classes.LogoHead}>
          <img src={logo} alt="logo" />
          <p>Tu orden de</p>
          <h3>Doña Esperanza</h3>
        </div>
      </div>
      {props.productsToShop.map((product) => {
        return (
          <ShopItem
            key={product.id + "Cart"}
            productToShop={product}
            deleteProduct={() => props.deleteProduct(product)}
            changeCantidad={(operation) =>
              props.changeCantidad(product.id, operation)
            }
          />
        );
      })}
      <ShopInfo products={props.productsToShop} />
      <Boton type="CheckOut" click={props.Purchase}>
        Checkout
      </Boton>
    </div>
  );
}

export default ShopProducts;
