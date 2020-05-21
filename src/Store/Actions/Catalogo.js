import * as ActionTypes from "./ActionTypes";

export const onSelectProductHandler = (productSelected) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    productSelected,
  };
};
export const onUnSelectProduct = () => {
  return {
    type: ActionTypes.UNSELECT_PRODUCT,
  };
};

export const onFailFetch = (error) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS_FAIL,
    error,
  };
};

export const filterProductsSuccess = (products) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS_SUCCESS,
    products,
  };
};

export const formatProductsInCatalog = (filterCatalog, cart) => {
  return {
    type: ActionTypes.FORMAT_PRODUCTS_IN_CATALOG,
    filterCatalog,
    cart,
  };
};

export const filterProducts = (productName, filterByName) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS,
    productName,
    filterByName,
  };
};

export const fetchProduct = (id) => {
  return {
    type: ActionTypes.FETCH_PRODUCT,
    id,
  };
};

export const onAddNewProduct = (product) => {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    product,
  };
};

export const onChangePageCatalog = (direction) => {
  return {
    type: ActionTypes.CHANGE_PAGE_CATALOG,
    direction,
  };
};
