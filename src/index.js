import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
// import SimpleApp from "./SimpleApp";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App /></React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
