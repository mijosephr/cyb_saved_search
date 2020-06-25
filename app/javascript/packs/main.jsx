import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "../features/App";
import store from "../store";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement("div"))
  );
});
