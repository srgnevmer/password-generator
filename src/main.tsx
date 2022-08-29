import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className="text-lime-400 text-2xl">first render</div>
  </React.StrictMode>
);
