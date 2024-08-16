import { componentMap } from '@/helpers/componentsMap';
import React, { useState, useEffect } from 'react';

// Simple in-memory cache
const cache = new Map();

const GqlComponent = (props: any) => {
  const { section, alterType } = props;
  const [cachedData, setCachedData] = useState(null);

  // Determine the component to render based on __typename
  let ComponentGql = componentMap[section.__typename];

  // Generate a cache key based on the section id or another unique identifier
  const cacheKey = section.sys.id;

  useEffect(() => {
    // Check if data is in cache
    if (cache.has(cacheKey)) {
      // Use cached data
      setCachedData(cache.get(cacheKey));
    } else {
      // Cache the new section data
      cache.set(cacheKey, section);
      setCachedData(section);
    }
  }, [section, cacheKey]);

  if (!ComponentGql || !cachedData) {
    return <></>;
  }

  return <ComponentGql id={section.sys.id} data={cachedData} />;
};

export default GqlComponent;