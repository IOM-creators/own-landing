import Image from "next/image";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import App from "@/components/App";
import store from "../store";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_ID}`,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOCKEN}`,
  },
  cache: new InMemoryCache(),
});




export default function Home() {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  );
}
