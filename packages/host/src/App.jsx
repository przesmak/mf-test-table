import React from "react";
import { createRoot } from "react-dom/client";
const Table = React.lazy(() => import("sensor-table/Table"))
const Header = React.lazy(() => import("app-header/Header"))

import "./index.css";

const App = () => (
  <>
    <React.Suspense fallback={<div>Loading header...</div>}>
      <Header />
    </React.Suspense>
    <div className="container">
      <React.Suspense fallback={<div>Loading table...</div>}>
        <Table />
      </React.Suspense>
    </div>
  </>
);
const root = createRoot(document.getElementById("app"))
root.render(<App />);
