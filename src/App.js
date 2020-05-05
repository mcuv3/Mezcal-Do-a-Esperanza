import React from "react";
import "./App.css";
import LayOut from "./HOC/LayOut/LayOut";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./Contenedores/MainPage/MainPage";
import Catalogo from "./Contenedores/Catalogo/Catalogo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayOut>
          <Switch>
            <Route path="/catalogo" component={Catalogo} />
            <Route path="/" exact component={MainPage} />
          </Switch>
        </LayOut>
      </BrowserRouter>
    </div>
  );
}

export default App;
