import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { checkSession } from '../../auth0.js';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_ENDPOINT
});

const authLink = setContext(async (_, { headers }) => {
  // Check or renew session
  const accessToken = checkSession()
    .then(({ accessToken }) => accessToken)
    .catch(() => '');
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${await accessToken}`
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default client;
