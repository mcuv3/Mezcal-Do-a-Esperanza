import { put } from "redux-saga/effects";
import * as actions from "../Actions/Index";
import axios from "../../axios-product";

export function* formatDataInCartSaga(action) {
  let products = [];
  for (let productInCatalogKey in action.catalogProducts) {
    for (let productInCartKey in action.cartProducts) {
      if (action.cartProducts[productInCartKey].id === productInCatalogKey) {
        products.push({
          id: action.cartProducts[productInCartKey].id,
          cartId: productInCartKey,
          cantidad: action.cartProducts[productInCartKey].cantidad,
          ...action.catalogProducts[productInCatalogKey],
        });
      }
    }
  }
  const total = products.reduce(
    (acc, product) => acc + product.cantidad * product.Precio,
    0
  );
  yield put(actions.fetchProductsInCartSuccess(products, total));
}

export function* fetchProductsInCartSaga(action) {
  try {
    yield put(actions.transactionStart());
    const cart = yield axios.get("/ShopProducts.json");
    const allProducts = yield axios.get("/Products.json");
    yield put(actions.formatDataInCart(allProducts.data, cart.data));
  } catch (error) {
    yield put(actions.transactionFail(error));
  }
}

export function* addProductInCartSaga(action) {
  yield put(actions.transactionStart());
  try {
    yield axios.post("/ShopProducts.json", action.product);
    yield put(actions.addProductToCartSuccess(action.product));
  } catch (error) {
    yield put(actions.transactionFail(error));
  }
}

export function* removeProductFromCartSaga(action) {
  yield put(actions.transactionStart());
  try {
    yield axios.delete("/ShopProducts/" + action.product.cartId + ".json");
    yield put(actions.removeProductFromCartSuccess(action.product.id));
  } catch (error) {
    yield put(actions.transactionFail(error));
  }
}
