import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ShopProvider } from "./ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <ShopProvider>
    <App />
  </ShopProvider>
);
