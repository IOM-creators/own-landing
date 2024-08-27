import { componentMap } from '@/helpers/componentsMap';
import React, { useState, useEffect } from 'react';

// Simple in-memory cache
const cache = new Map();

const GqlComponent = (props: any) => {
  const { section, alterType } = props;
  // const [cachedData, setCachedData] = useState(null);

  // Determine the component to render based on __typename
  if (!section) {
    return null
  }

  let ComponentGql = componentMap[section.__typename];

  // Generate a cache key based on the section id or another unique identifier



  return <ComponentGql section={section} />;
};

export default GqlComponent;