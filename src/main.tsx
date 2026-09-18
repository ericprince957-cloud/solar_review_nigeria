import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { products } from "./data/products";
import { validateAllProducts } from "./lib/validation";

// Validate product data in development mode
if (import.meta.env.DEV) {
  validateAllProducts(products);
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
