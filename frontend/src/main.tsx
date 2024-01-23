import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { TanStackProvider } from "./plugins/TanStackProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanStackProvider>
      <App />
    </TanStackProvider>
  </React.StrictMode>
);
