import * as actions from "../Actions/ActionTypes";
import axios from "../../axios-product";

//FETCH PRODUCT IN CART

export const fetchProductsInCartStart = () => {
  return {
    type: actions.FETCH_PRODUCTS_IN_CART_START,
  };
};
export const fetchProductsInCartSuccess = (productsToShop) => {
  return {
    type: actions.FETCH_PRODUCTS_IN_CART_SUCCESS,
    productsToShop,
  };
};
export const fetchProductsInCartFail = (error) => {
  return {
    type: actions.FETCH_PRODUCTS_IN_CART_FAIL,
    error,
  };
};

export const formatDataInCart = (
  catalogProducts,
  cartProducts,
  isCatalogProductsArray
) => {
  return (dispatch) => {
    let productsInCart = [];
    console.log(cartProducts);

    for (let productInCatalogKey in catalogProducts) {
      for (let productInCartKey in cartProducts) {
        if (
          cartProducts[productInCartKey].id ===
          (isCatalogProductsArray
            ? catalogProducts[productInCatalogKey].id
            : productInCatalogKey)
        )
          productsInCart.push({
            id: cartProducts[productInCartKey].id,
            cantidad: cartProducts[productInCartKey].cantidad,
            ...catalogProducts[productInCatalogKey],
          });
      }
    }

    dispatch(fetchProductsInCartSuccess(productsInCart));
  };
};

export const fetchProductsInCart = (catalogProducts) => {
  return (dispatch) => {
    dispatch(fetchProductsInCartStart());
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

export const addProductToCartStart = () => {
  return {
    type: actions.ADD_PRODUCT_TO_CART_START,
  };
};
export const addProductToCartSuccess = (product) => {
  return {
    type: actions.ADD_PRODUCT_TO_CART_SUCCESS,
    product,
  };
};
export const addProductToCartFail = (error) => {
  return {
    type: actions.ADD_PRODUCT_TO_CART_FAIL,
    error,
  };
};

export const addProductToCart = (product) => {
  return (dispatch) => {
    dispatch(addProductToCartStart());
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

export const removeProductToCartSuccess = (product) => {
  return {
    type: actions.ADD_PRODUCT_TO_CART_SUCCESS,
    product,
  };
};
export const removeProductToCartFail = (error) => {
  return {
    type: actions.ADD_PRODUCT_TO_CART_FAIL,
    error,
  };
};
export const removeProductToCart = (product) => {
  return (dispatch) => {
    //Remove Product From Cart
  };
};
