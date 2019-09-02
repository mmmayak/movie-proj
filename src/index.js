import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Provider } from "mobx-react";
import MovieStore from "./store/MovieStore";
import "./config/http";

const App = (
  <Provider MovieStore={MovieStore}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
