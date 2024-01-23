import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { TanStackProvider } from "./plugins/TanStackProvider";
import { ThemeProvider } from "./components/ThemeProvider/index.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TanStackProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </TanStackProvider>
  </React.StrictMode>
);
