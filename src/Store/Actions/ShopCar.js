import * as ActionTypes from "./ActionTypes";
import axios from "../../axios-product";
import * as actions from "./Index";

//FETCH PRODUCT IN CART

export const transactionStart = () => {
  return {
    type: ActionTypes.TRANSACTION_START,
  };
};

export const fetchProductsInCartSuccess = (productsToShop) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_IN_CART_SUCCESS,
    productsToShop,
  };
};
export const fetchProductsInCartFail = (error) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_IN_CART_FAIL,
    error,
  };
};

export const formatDataInCart = (
  catalogProducts,
  cartProducts,
  isCatalogProductsArray,
  fetchedFromCatalog
) => {
  return (dispatch) => {
    let products = [];
    for (let productInCatalogKey in catalogProducts) {
      for (let productInCartKey in cartProducts) {
        if (
          cartProducts[productInCartKey].id ===
          (isCatalogProductsArray
            ? catalogProducts[productInCatalogKey].id
            : productInCatalogKey)
        ) {
          var isInCar = null;
          fetchedFromCatalog
            ? (isInCar = true)
            : products.push({
                id: cartProducts[productInCartKey].id,
                cartId: productInCartKey,
                cantidad: cartProducts[productInCartKey].cantidad,
                ...catalogProducts[productInCatalogKey],
              });
        }
      }
      if (fetchedFromCatalog) {
        isInCar
          ? products.push({ ...catalogProducts[productInCatalogKey], isInCar })
          : products.push({ ...catalogProducts[productInCatalogKey] });
      }
      isInCar = null;
    }

    if (!fetchedFromCatalog) dispatch(fetchProductsInCartSuccess(products));
    else dispatch(actions.onSuccessFetch(products));
  };
};

export const fetchProductsInCart = (catalogProducts) => {
  return (dispatch) => {
    dispatch(transactionStart());
    axios
      .get("/ShopProducts.json")
      .then((res) => {
        if (catalogProducts.length > 0) {
          dispatch(formatDataInCart(catalogProducts, res.data, true));
        } else {
          let productsInCart = res.data;
          axios
            .get("/Products.json")
            .then((res) => {
              dispatch(formatDataInCart(res.data, productsInCart, false));
            })
            .catch((err) => {
              dispatch(fetchProductsInCartFail(err));
            });
        }
      })
      .catch((error) => {
        dispatch(fetchProductsInCartFail(error));
      });
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
