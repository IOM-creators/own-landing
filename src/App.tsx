import React from "react";
import "./App.scss";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="font-bold">IOM</h1>
        <p>hello</p>
        <Button primary >MY btn</Button>
      </header>
    </div>
  );
}

export default App;
