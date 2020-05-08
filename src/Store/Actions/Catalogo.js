import * as ActionTypes from "./ActionTypes";
import axios from "../../axios-product";
import * as actions from "./Index";

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

export const onSuccessFetch = (products) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
    products,
  };
};
export const onFailFetch = (error) => {
  return {
    type: ActionTypes.FETCH_PRODUCTS_FAIL,
    error,
  };
};

export const fetchProductsFromDB = () => {
  return (dispatch) => {
    axios
      .get("/Products.json")
      .then((res) => {
        let products = [];
        for (let key in res.data) {
          products.push({ id: key, ...res.data[key] });
        }
        axios
          .get("/ShopProducts.json")
          .then((res) => {
            dispatch(actions.formatDataInCart(products, res.data, true, true));
          })
          .catch((err) => {
            dispatch(onFailFetch(err));
          });
      })
      .catch((err) => {
        dispatch(onFailFetch(err));
      });
  };
};
export const fetchProduct = (id) => {
  return (dispatch) => {
    axios
      .get("/Products/" + id + ".json")
      .then((res) => {
        dispatch(onSelectProductHandler({ id, ...res.data }));
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
      .then((res) => {
        dispatch(fetchProductsFromDB());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
