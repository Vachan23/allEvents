import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//redux
import {Provider } from 'react-redux'
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
  <Provider store ={store}>

    <App />
  </Provider>
  </BrowserRouter>,
  rootElement
);
