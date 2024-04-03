import React from "react";

import HeroBanner from "../components/hero-banner";
import Sections from "../components/sections";
import Popup from "../components/popup";
import ContactButton from "../components/contact-button";
// import Seo from "./components/seo";
// // import { I18nProvider } from "./helpers/i18nContext";

function App() {
  return (
    <div className="App">
      {/* <I18nProvider> */}
      <HeroBanner showAnimation />
      <main>
        <Sections />
        <ContactButton />
        <Popup />
      </main>
      {/* <Seo />
     
   
   
   }
      {/* </I18nProvider> */}
    </div>
  );
}

export default App;
