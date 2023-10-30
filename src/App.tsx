import React from "react";
import "./App.scss";

import HeroBanner from "./components/hero-banner";
import Sections from "./components/sections";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroBanner showAnimation />
      <main className="">
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
