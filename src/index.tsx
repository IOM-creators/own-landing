import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOCKEN}`,
  },
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Router>
          <Routes>
            <Route path="/:lang" element={<App />} />
            <Route index element={<App />} />
          </Routes>
        </Router>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
