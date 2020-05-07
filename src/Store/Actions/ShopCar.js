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

export const formatDataInCart = (calogoProducts, cartProducts) => {
  // let productsToShop = [];
  //     for (let key in calogoProducts) {
  //       productsToShop.push(res.data[key]);
  //     }
  //dispatch(fetchProductsInCartSuccess(productsToShop));
  return {};
};

export const fetchProductsInCart = (catalogoProducts) => {
  return (dispatch) => {
    axios
      .get("/ShopProducts.json")
      .then((res) => {
        console.log(res.data);
        console.log(catalogoProducts);
        if (catalogoProducts.length > 0) {
          //dispatch(formatDataInCart(catalogoProducts, res.data));
        } else {
          let pro = axios
            .get("/Products.json")
            .then((res) => {
              //dispatch(formatDataInCart(res.data));
              pro = res.data;
            })
            .catch((err) => {
              // dispatch(onFailFetch(err));
            });
          console.log(pro);
        }
      })
      .catch((error) => {
        console.log(error);
        //  dispatch(fetchProductsInCartFail(error));
      });
    dispatch(fetchProductsInCartStart());
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
