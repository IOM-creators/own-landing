import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log('====', process.env.REACT_APP_CONTENTFUL_TOCKEN)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/:lang" element={<App />} />
          <Route index element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
