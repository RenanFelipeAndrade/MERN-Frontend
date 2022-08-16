import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "bulma"; // bulma css framework
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
