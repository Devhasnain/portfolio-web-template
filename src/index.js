import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/global.css";
import { StateProvider } from "./Store/States";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
