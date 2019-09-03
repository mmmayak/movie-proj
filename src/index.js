import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "mobx-react";
import "./config/http";
import { stores } from "./stores";

const App = (
  <Provider {...stores}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
