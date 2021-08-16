import React from "react";
import ReactDOM from "react-dom";
import { RelayEnvironmentProvider } from "react-relay";
import App from "./App";
import Environment from "./environment";

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={Environment}>
      <App />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
