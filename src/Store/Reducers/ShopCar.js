import * as ActionTypes from "../Actions/ActionTypes";

const InitialState = {
  userId: "",
  productsToShop: [],
  addProductSuccess: false,
  total: "",
  subTotal: "",
  iva: "",
  error: null,
  loading: false,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.TRANSACTION_START:
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
    case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        addProductSuccess: true,
      };
    case ActionTypes.ADD_PRODUCT_TO_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        productsToShop: state.productsToShop.filter(
          (product) => product.id !== action.id
        ),
      };
    case ActionTypes.REMOVE_PRODUCT_FROM_CART_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.CHANGE_PRODUCT_QUANTITY:
      return {
        ...state,
        productsToShop: state.productsToShop.map((p) => {
          if (p.id === action.id)
            p.cantidad = action.operation
              ? p.cantidad + 1
              : p.cantidad > 1
              ? p.cantidad - 1
              : 1;
          return p;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
