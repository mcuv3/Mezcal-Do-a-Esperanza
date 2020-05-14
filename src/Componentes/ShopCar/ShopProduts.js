import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import classes from "./ShopProducts.css";
import Boton from "../UI/Botones/Boton";
import ShopInfo from "./ShopInfo/ShopInfo";
import logo from "../../Assets/logo.png";
import Spinner from "../UI/Spinner/Spinner";

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
      {props.loading ? (
        <div style={{ position: "relative", right: "-42%" }}>
          <Spinner />
        </div>
      ) : (
        props.productsToShop.map((product) => {
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
        })
      )}
      <ShopInfo cartPriceSummary={props.cartPriceSummary} />
      <Boton
        type="CheckOut"
        click={props.Purchase}
        disabled={props.loading ? true : false}
      >
        Checkout
      </Boton>
    </div>
  );
}

export default ShopProducts;
