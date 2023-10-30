import React from "react";
import "./App.scss";

import HeroBanner from "./components/hero-banner";
import Sections from "./components/sections";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner showAnimation />
      <main className="">
        <Sections />
      </main>
    </div>
  );
}

export default App;
