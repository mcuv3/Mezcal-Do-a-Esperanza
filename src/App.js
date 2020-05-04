import React from "react";
import "./App.css";
import LayOut from "./HOC/LayOut/LayOut";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LayOut>
          <p>Contenido</p>
        </LayOut>
      </BrowserRouter>
    </div>
  );
}

export default App;
