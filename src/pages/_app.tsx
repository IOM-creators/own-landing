import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../assets/index.css";
import Layout from "@/components/layout";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import store from "../store";

export const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOCKEN}`,
  },
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </Provider>
  );
}
