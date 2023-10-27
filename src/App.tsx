import React from "react";
import "./App.scss";

import HeroBanner from "./components/hero-banner";
import Sections from "./components/sections";

function App() {
  return (
    <div className="App">
      <HeroBanner showAnimation />
      <main className=" container mx-lg">
        <Sections />
      </main>
    </div>
  );
}

export default App;
