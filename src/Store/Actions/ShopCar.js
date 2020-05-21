import * as ActionTypes from "./ActionTypes";

//FETCH PRODUCT IN CART

export const transactionStart = () => {
  return {
    type: ActionTypes.TRANSACTION_START,
  };
};
export const transactionFail = (error) => {
  return {
    type: ActionTypes.TRANSACTION_FAIL,
    error,
  };
};

export const fetchProductsInCartSuccess = (productsToShop, total) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_IN_CART_SUCCESS,
    productsToShop,
    total,
  };
};

export const formatDataInCart = (catalogProducts, cartProducts) => {
  return {
    type: ActionTypes.FORMAT_DATA_IN_CART,
    catalogProducts,
    cartProducts,
  };
};

export const fetchProductsInCart = () => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_IN_CART,
  };
};

//ADD PRODUCT TO CART

export const addProductToCartSuccess = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
    product,
  };
};

export const addProductToCart = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT_TO_CART,
    product,
  };
};

//REMOVE PRODUCT FROM CART

export const removeProductFromCartSuccess = (id) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS,
    id,
  };
};

export const removeProductFromCart = (product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT_FROM_CART,
    product,
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
