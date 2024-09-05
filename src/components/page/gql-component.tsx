import { componentMap } from "@/helpers/componentsMap";
import React, { useState, useEffect } from "react";

// Simple in-memory cache
const cache = new Map();

const GqlComponent = (props: any) => {
  const { section, alterType, tagH1 } = props;
  // const [cachedData, setCachedData] = useState(null);

  // Determine the component to render based on __typename
  if (!section) {
    return null;
  }

  let ComponentGql = componentMap[section.__typename];

  // Generate a cache key based on the section id or another unique identifier

  return <ComponentGql section={section} tagH1={tagH1} />;
};

export default GqlComponent;
