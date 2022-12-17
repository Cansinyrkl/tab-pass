import React from "react";
import "./App.css";
import Tabs from "./components/tabs/Tabs.jsx";
import Content from "../src/components/content/Content.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Tabs />
        <Content />
      </div>
    </div>
  );
}

export default App;
