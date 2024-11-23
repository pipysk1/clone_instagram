import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import RootPage from "./pages/root";
import './index.css'; // Fixed the import statement for index.css

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <RootPage />
    </Router>
  </StrictMode>
);
