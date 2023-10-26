import React from "react";
import "./App.scss";

import HeroBanner from "./components/hero-banner";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">


        <h1 className="font-bold">IOM</h1>
        <p>hello</p>
        <Button primary >MY btn</Button>
      </header> */}

      <HeroBanner showAnimation />
      <Header />
    </div>
  );
}

export default App;
