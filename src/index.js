import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import CatalogoReducer from "./Store/Reducers/Catalogo";
import ShopCartReducer from "./Store/Reducers/ShopCar";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import createSagaMiddleware from "redux-saga";
import { watchCatalogo, watchShopCart } from "./Store/Sagas/index";

const sagaMiddleware = createSagaMiddleware();

const rootReducers = combineReducers({
  catalogo: CatalogoReducer,
  shopcart: ShopCartReducer,
});
const composeEnhancers =
  (process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);
sagaMiddleware.run(watchCatalogo);
sagaMiddleware.run(watchShopCart);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
