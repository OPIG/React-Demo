import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const items = ["item"];
ReactDOM.render(
  <App items={window && window.APP_PROPS ? window.APP_PROPS.items : items} />,
  document.getElementById("app")
);
