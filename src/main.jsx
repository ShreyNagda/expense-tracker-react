import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { TransactionProvider } from "./Context/GlobalContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="bottom-right" />
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </StrictMode>
);
