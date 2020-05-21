import {
  fetchProductSaga,
  filterProductsSaga,
  formatProductsInCatalogSaga,
  AddNewProductSaga,
} from "./Catalogo";
import {
  formatDataInCartSaga,
  addProductInCartSaga,
  removeProductFromCartSaga,
  fetchProductsInCartSaga,
} from "./ShopCart";
import { all, takeEvery } from "redux-saga/effects";
import * as ActionTypes from "../Actions/ActionTypes";

export function* watchCatalogo() {
  yield all([
    takeEvery(ActionTypes.FILTER_PRODUCTS, filterProductsSaga),
    takeEvery(ActionTypes.FETCH_PRODUCT, fetchProductSaga),
    takeEvery(
      ActionTypes.FORMAT_PRODUCTS_IN_CATALOG,
      formatProductsInCatalogSaga
    ),
    takeEvery(ActionTypes.ADD_NEW_PRODUCT, AddNewProductSaga),
  ]);
}
export function* watchShopCart() {
  yield all([
    takeEvery(ActionTypes.FORMAT_DATA_IN_CART, formatDataInCartSaga),
    takeEvery(ActionTypes.ADD_PRODUCT_TO_CART, addProductInCartSaga),
    takeEvery(ActionTypes.REMOVE_PRODUCT_FROM_CART, removeProductFromCartSaga),
    takeEvery(ActionTypes.FETCH_PRODUCTS_IN_CART, fetchProductsInCartSaga),
  ]);
}
