import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { Provider } from "./context/books.js";

createRoot(document.getElementById("root")).render(
  <Provider value={{}}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>
);
