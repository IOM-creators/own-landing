import React from "react";
import "./App.scss";
import Button from "./components/button";
import HeroBanner from "./components/hero-banner";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">


        <h1 className="font-bold">IOM</h1>
        <p>hello</p>
        <Button primary >MY btn</Button>
      </header> */}
      <HeroBanner showAnimation />
    </div>
  );
}

export default App;
