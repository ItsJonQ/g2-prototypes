import React from "react";
import { HashRouter as Router } from "react-router-dom";

export default function AppProvider({ children }) {
  return (
    <Router>
      <>{children}</>
    </Router>
  );
}
