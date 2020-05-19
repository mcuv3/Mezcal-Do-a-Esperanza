import * as actionTypes from "../Actions/ActionTypes";

const initialState = {
  productSelected: [],
  products: [[]],
  page: 0,
  showProductInfo: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_PRODUCT:
      return {
        ...state,
        productSelected: action.productSelected,
        showProductInfo: true,
      };
    case actionTypes.UNSELECT_PRODUCT:
      return {
        ...state,
        productSelected: [],
        showProductInfo: false,
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
    case actionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        products: action.products.length === 0 ? [[]] : action.products,
        page: 0,
      };
    case actionTypes.CHANGE_PAGE_CATALOG:
      return {
        ...state,
        page: action.direction ? state.page + 1 : state.page - 1,
      };
    default:
      return state;
  }
};

export default reducer;
