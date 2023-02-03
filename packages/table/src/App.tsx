import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import Table from "./Table";

const App = () => (
  <div className="container">
    <div>Name: table</div>
    <Table />
  </div>
);
const root = createRoot(document.getElementById("app"))
root.render(<App />);
