import {ApolloClient, InMemoryCache} from '@apollo/client';
import {APOLLO_HITPOINT_URL} from '@constants/api';

const apolloClient = new ApolloClient({
  uri: APOLLO_HITPOINT_URL,
  cache: new InMemoryCache(),
});

export default apolloClient;
