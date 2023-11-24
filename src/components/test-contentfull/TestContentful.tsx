// src/components/MyComponent.js

import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const GET_CONTENTFUL_ENTRY = gql`
  query iomLandingEntryQuery {
    iomLanding(id: "${process.env.REACT_APP_CONTENTFUL_ENTRY_ID}") {
      title
      headerNavigation
      logo
    }
  }
`;

const TestContentful = () => {
  const { data } = useQuery(GET_CONTENTFUL_ENTRY);
  const fields = data?.iomLanding;

  return <div>{fields && <h1>{fields.title}</h1>}</div>;
};

export default TestContentful;
