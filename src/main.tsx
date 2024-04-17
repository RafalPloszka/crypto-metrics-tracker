import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { Theme } from "@radix-ui/themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Theme
      accentColor="grass"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
