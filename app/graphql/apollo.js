import {ApolloClient, ApolloLink, InMemoryCache, split} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import {onError} from '@apollo/client/link/error';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';
import {
  AsyncStorageKeys,
  fetchPolicyValues,
  HeaderKeys,
  Patterns,
  ReplaceableTokens,
} from '@constants/strings';
import {APOLLO_HITPOINT_URL} from '@constants/urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createUploadLink} from 'apollo-upload-client';
import {Kind, OperationTypeNode} from 'graphql';
import {SubscriptionClient} from 'subscriptions-transport-ws';

const httpLink = createUploadLink({
  uri: APOLLO_HITPOINT_URL,
});

const client = new SubscriptionClient(/*APOLLO_WS_URL*/ APOLLO_HITPOINT_URL, {
  reconnect: true,
  minTimeout: 55000,
});

client.use([
  {
    async applyMiddleware(operationOptions, next) {
      operationOptions.variables[HeaderKeys.authorization] =
        await AsyncStorage.getItem(AsyncStorageKeys.authorizationToken);
      next();
    },
  },
]);

const wsLink = new WebSocketLink(client);

const authLink = setContext(async (_, {headers}) => {
  const token = await AsyncStorage.getItem(AsyncStorageKeys.authorizationToken);
  return {
    headers: {
      ...headers,
      Authorization: Patterns.authorizationHeader.replace(
        ReplaceableTokens.BearerToken,
        token,
      ),
    },
  };
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (networkError) console.error(networkError);
  if (graphQLErrors) graphQLErrors.map(({message}) => console.error(message));
});

const apolloClient = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: split(
    ({query}) => {
      const def = getMainDefinition(query);
      return (
        def.kind === Kind.OPERATION_DEFINITION &&
        def.operation === OperationTypeNode.SUBSCRIPTION
      );
    },
    wsLink,
    ApolloLink.from([errorLink, authLink, httpLink]),
  ),
  cache: new InMemoryCache({}),
  defaultOptions: {
    watchQuery: {fetchPolicy: fetchPolicyValues.noCache},
    query: {fetchPolicy: fetchPolicyValues.noCache},
    mutate: {fetchPolicy: fetchPolicyValues.noCache},
  },
});

export default apolloClient;
