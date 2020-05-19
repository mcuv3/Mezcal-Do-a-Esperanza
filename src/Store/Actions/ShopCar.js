import * as ActionTypes from "./ActionTypes";
import axios from "../../axios-product";

//FETCH PRODUCT IN CART

export const transactionStart = () => {
  return {
    type: ActionTypes.TRANSACTION_START,
  };
};

export const fetchProductsInCartSuccess = (productsToShop, total) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_IN_CART_SUCCESS,
    productsToShop,
    total,
  };
};
export const fetchProductsInCartFail = (error) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_IN_CART_FAIL,
    error,
  };
};

export const formatDataInCart = (catalogProducts, cartProducts) => {
  return (dispatch) => {
    let products = [];
    for (let productInCatalogKey in catalogProducts) {
      for (let productInCartKey in cartProducts) {
        if (cartProducts[productInCartKey].id === productInCatalogKey) {
          products.push({
            id: cartProducts[productInCartKey].id,
            cartId: productInCartKey,
            cantidad: cartProducts[productInCartKey].cantidad,
            ...catalogProducts[productInCatalogKey],
          });
        }
      }
    }
    const total = products.reduce(
      (acc, product) => acc + product.cantidad * product.Precio,
      0
    );
    dispatch(fetchProductsInCartSuccess(products, total));
  };
};

export const fetchProductsInCart = () => {
  return (dispatch) => {
    dispatch(transactionStart());
    const cart = axios.get("/ShopProducts.json").then((res) => res.data);
    const allProducts = axios.get("/Products.json").then((res) => res.data);
    Promise.all([allProducts, cart])
      .then((promises) => {
        dispatch(formatDataInCart(promises[0], promises[1]));
      })
      .catch((error) => dispatch(fetchProductsInCartFail(error)));
  };
};

//ADD PRODUCT TO CART

export const addProductToCartSuccess = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    product,
  };
};
export const addProductToCartFail = (error) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_FAIL,
    error,
  };
};

export const addProductToCart = (product) => {
  return (dispatch) => {
    dispatch(transactionStart());
    axios
      .post("/ShopProducts.json", product)
      .then((res) => {
        dispatch(addProductToCartSuccess(product));
      })
      .catch((error) => {
        dispatch(addProductToCartFail(error));
      });
  };
};

//REMOVE PRODUCT FROM CART

export const removeProductFromCartSuccess = (id) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS,
    id,
  };
};
export const removeProductFromCartFail = (error) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART_FAIL,
    error,
  };
};
export const removeProductFromCart = (product) => {
  return (dispatch) => {
    dispatch(transactionStart());
    axios
      .delete("/ShopProducts/" + product.cartId + ".json")
      .then((res) => {
        dispatch(removeProductFromCartSuccess(product.id));
      })
      .catch((error) => {
        dispatch(removeProductFromCartFail(error));
      });
  };
};

//Change Product Quantity

export const changeProductQuantity = (id, operation) => {
  return {
    type: ActionTypes.CHANGE_PRODUCT_QUANTITY,
    id,
    operation,
  };
};
