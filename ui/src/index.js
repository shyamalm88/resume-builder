import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";

import "./index.css";
import App from "./App";
import reducers from "./reducers/reducers";

const composeEnhance = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
ReactDOM.render(
  <Provider store={createStore(reducers, composeEnhance(applyMiddleware()))}>
    <App />
  </Provider>,
  document.getElementById("root")
);
