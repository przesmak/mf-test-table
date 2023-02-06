import React from "react";
import { createRoot } from "react-dom/client";
import { theme } from './static/BaseProvider/BaseTheme';


import "./index.css";
import Table from "./Table";
import { ThemeProvider } from "@mui/material";

const App = () => (
  <ThemeProvider theme={theme}>
  <div className="container">
    <div>Name: table</div>
    <Table />
  </div>
  </ThemeProvider>
);
const root = createRoot(document.getElementById("app"))
root.render(<App />);
