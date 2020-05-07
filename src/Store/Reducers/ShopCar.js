import * as ActionTypes from "../Actions/ActionTypes";

const InitialState = {
  userId: "",
  productsToShop: [],
  total: "",
  subTotal: "",
  iva: "",
  error: null,
  loading: false,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS_IN_CART_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_PRODUCTS_IN_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        productsToShop: action.productsToShop,
      };
    case ActionTypes.FETCH_PRODUCTS_IN_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.ADD_PRODUCT_TO_CART_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        productsToShop: state.productsToShop.concat(action.product),
      };
    case ActionTypes.ADD_PRODUCT_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
