import React from "react";
import "./App.css";
import Main from "./components/Main/Main";
import { HashRouter } from "react-router-dom";
function App() {
  return (
    <HashRouter className="App">
      <Main />
    </HashRouter>
  );
}

export default App;
