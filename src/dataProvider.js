import buildPrismaProvider, { buildQuery } from 'ra-data-opencrud';
import get from 'lodash/get';

import newsFragments from './queries/news.js';

const fragments = { ...newsFragments };

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (fetchType, resourceName, params) => {
  const fragment = get(fragments, `${resourceName}.${fetchType}`);

  return buildQuery(introspectionResults)(fetchType, resourceName, params, fragment);
};

export default async () => {
  return await buildPrismaProvider({
    clientOptions: {
      uri: process.env.REACT_APP_API_ENDPOINT
    },
    buildQuery: enhanceBuildQuery(buildQuery)
  });
};
