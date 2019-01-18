import buildPrismaProvider, { buildQuery } from 'ra-data-opencrud';
import get from 'lodash/get';
import fragments from './fragments';
import client from './apolloClient';

const enhanceBuildQuery = (buildQuery) => (introspectionResults) => (fetchType, resourceName, params) => {
  const fragment = get(fragments, `${resourceName}.${fetchType}`);
  return buildQuery(introspectionResults)(fetchType, resourceName, params, fragment);
};

export default async () => {
  return await buildPrismaProvider({
    client,
    buildQuery: enhanceBuildQuery(buildQuery)
  });
};
