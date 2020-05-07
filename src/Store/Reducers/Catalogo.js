import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  productSelected: [],
  products: [],
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        productSelected: action.productSelected,
      };
    case actionTypes.UNSELECT_PRODUCT:
      return {
        ...state,
        productSelected: "-",
      };
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        error: false,
      };
    case actionTypes.FETCH_PRODUCTS_FAIL:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
