import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);
