import React from "react";
import ShopItem from "./ShopItem/ShopItem";
import Boton from "../UI/Botones/Boton";
import ShopInfo from "./ShopInfo/ShopInfo";
import CartWrapper from "./CartWrapper/CartWrapper";
import Spinner from "../UI/Spinner/Spinner";

function ShopProducts(props) {
  return (
    <CartWrapper>
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
    </CartWrapper>
  );
}

export default ShopProducts;
