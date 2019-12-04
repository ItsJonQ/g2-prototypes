import React from "react";
import AppProvider from "./components/app-provider";
import AppLayout from "./components/app-layout";
import NavBar from "./components/nav-bar";
import Routes from "./routes";

import "./styles.css";

function App() {
  return (
    <AppProvider>
      <AppLayout>
        <NavBar />
        <Routes />
      </AppLayout>
    </AppProvider>
  );
}

export default App;
