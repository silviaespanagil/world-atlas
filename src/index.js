import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

//COMPONENTS
import App from "./App";

//STYLES
import "./stylesheets/App.scss";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
