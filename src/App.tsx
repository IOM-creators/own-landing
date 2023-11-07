import React from "react";
import "./App.scss";

import HeroBanner from "./components/hero-banner";
import Sections from "./components/sections";
import Header from "./components/header";
import Footer from "./components/footer";
import Seo from "./components/seo";
import { I18nProvider } from "./helpers/i18nContext";

function App() {
  return (
    <div className="App">
      <I18nProvider>
        <Seo />
        <Header />
        <HeroBanner showAnimation />
        <main className="">
          <Sections />
        </main>
        <Footer />
      </I18nProvider>
    </div>
  );
}

export default App;
