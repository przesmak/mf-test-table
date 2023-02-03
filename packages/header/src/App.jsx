import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Header";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: header</div>
    <Header/>
  </div>
);
const root = createRoot(document.getElementById("app"))
root.render(<App />);
