import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bulma"; // bulma css framework
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
