import * as ActionTypes from "../Actions/ActionTypes";

const InitialState = {
  userId: "",
  productsToShop: [],
  cartPriceSummary: {
    total: 0,
    subTotal: 0,
    iva: 0,
    shipping: 2,
  },
  error: null,
  loading: false,
  addProductSuccess: false,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.TRANSACTION_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.TRANSACTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionTypes.FETCH_PRODUCTS_IN_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        productsToShop: action.productsToShop,
        cartPriceSummary: {
          ...state.cartPriceSummary,
          subTotal: action.total,
          iva: action.total * 0.16,
          total: (action.total * 1.16 + 2).toFixed(2),
        },
      };

    case ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        addProductSuccess: true,
      };
    case ActionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        productsToShop: state.productsToShop.filter(
          (product) => product.id !== action.id
        ),
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
