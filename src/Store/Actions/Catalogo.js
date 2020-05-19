import * as ActionTypes from "./ActionTypes";
import axios from "../../axios-product";

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
    type: ActionTypes.FETCH_PRODUCTS_FAIL,
    error,
  };
};

export const filterProductsSuccess = (products) => {
  return {
    type: ActionTypes.FILTER_PRODUCTS,
    products,
  };
};

export const formatProductsInCatalog = (filterCatalog, cart) => {
  return (dispatch) => {
    let products = [];
    for (let productId in filterCatalog) {
      for (let productCart in cart) {
        if (cart[productCart].id === productId) {
          var inCart = true;
          break;
        }
      }
      inCart
        ? products.push({
            id: productId,
            isInCar: true,
            ...filterCatalog[productId],
          })
        : products.push({ id: productId, ...filterCatalog[productId] });
      inCart = false;
    }
    const numberOfPages = Math.ceil(products.length / 9);
    const newProducts = [];
    for (let i = 0; i < numberOfPages; i++) {
      newProducts.push([]);
      for (let a = 0; a < 9; a++)
        products.length > 0 && newProducts[i].push(products.pop());
    }

    dispatch(filterProductsSuccess(newProducts));
  };
};

export const filterProducts = (productName, filterByName) => {
  const uf8ff = "\uf8ff";
  return (dispatch) => {
    let url;
    filterByName
      ? (url = `/Products.json?orderBy="Nombre"&startAt="${productName}"&endAt="${productName}${uf8ff}"`)
      : (url = `/Products.json?orderBy="seccion"&equalTo="${productName}"`);
    const products = axios.get(url).then((res) => res.data);
    const cart = axios.get("/ShopProducts.json").then((res) => res.data);
    Promise.all([products, cart])
      .then((values) => dispatch(formatProductsInCatalog(values[0], values[1])))
      .catch((error) => {
        dispatch(onFailFetch(error));
      });
  };
};

export const fetchProduct = (id) => {
  return (dispatch) => {
    axios
      .get("/Products/" + id + ".json")
      .then((res) => {
        res.data
          ? dispatch(onSelectProductHandler({ id, ...res.data }))
          : dispatch(onFailFetch(true));
      })
      .catch((err) => {
        dispatch(onFailFetch(err));
      });
  };
};

export const onAddNewProduct = (product) => {
  return (dispatch) => {
    axios
      .post("/Products.json", product)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };
};

export const onChangePageCatalog = (direction) => {
  return {
    type: ActionTypes.CHANGE_PAGE_CATALOG,
    direction,
  };
};
