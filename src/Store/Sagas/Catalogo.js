import { put } from "redux-saga/effects";
import * as actions from "../Actions/Index";
import axios from "../../axios-product";

export function* formatProductsInCatalogSaga(action) {
  let products = [];
  for (let productId in action.filterCatalog) {
    for (let productCart in action.cart) {
      if (action.cart[productCart].id === productId) {
        var inCart = true;
        break;
      }
    }
    inCart
      ? products.push({
          id: productId,
          isInCar: true,
          ...action.filterCatalog[productId],
        })
      : products.push({ id: productId, ...action.filterCatalog[productId] });
    inCart = false;
  }
  const numberOfPages = Math.ceil(products.length / 9);
  const newProducts = [];
  for (let i = 0; i < numberOfPages; i++) {
    newProducts.push([]);
    for (let a = 0; a < 9; a++)
      products.length > 0 && newProducts[i].push(products.pop());
  }
  yield put(actions.filterProductsSuccess(newProducts));
}

export function* filterProductsSaga(action) {
  const uf8ff = "\uf8ff";
  let url;
  action.filterByName
    ? (url = `/Products.json?orderBy="Nombre"&startAt="${action.productName}"&endAt="${action.productName}${uf8ff}"`)
    : (url = `/Products.json?orderBy="seccion"&equalTo="${action.productName}"`);
  try {
    const products = yield axios.get(url);
    const cart = yield axios.get("/ShopProducts.json");
    // const fetches = yield [axios.get(url),axios.get("/ShopProducts.json")]
    yield put(actions.formatProductsInCatalog(products.data, cart.data)); // fetches[0].data fetches[1].data
  } catch (error) {
    yield put(actions.onFailFetch(error));
  }
}

export function* fetchProductSaga(action) {
  try {
    const response = yield axios.get("/Products/" + action.id + ".json");
    response.data
      ? yield put(
          actions.onSelectProductHandler({ id: action.id, ...response.data })
        )
      : yield put(actions.onFailFetch(true));
  } catch (error) {
    yield put(actions.onFailFetch(error));
  }
}

export function* AddNewProductSaga(action) {
  try {
    yield axios.post("/Products.json", action.product);
  } catch (error) {
    console.log(error);
  }
}
