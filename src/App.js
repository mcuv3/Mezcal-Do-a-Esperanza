import React, { Component } from "react";
import classes from "./App.css";
import LayOut from "./HOC/LayOut/LayOut";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Contenedores/MainPage/MainPage";
import Catalogo from "./Contenedores/Catalogo/Catalogo";
import Addproduct from "./Componentes/Catalogo/AddProduct/AddProduct";
import ShopCar from "./Contenedores/ShopCar/ShopCar";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <LayOut>
            <Switch>
              <Route path="/catalogo" component={Catalogo} />
              <Route path="/shop-car" exact component={ShopCar} />
              <Route path="/addproduct" component={Addproduct} />
              <Route path="/" exact component={MainPage} />
            </Switch>
          </LayOut>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
