import {ApolloProvider} from '@apollo/client';
import apolloClient from '@client/apollo';
import MainStack from '@navigations/MainStack';
import LanguageProvider from '@providers/LanguageProvider';
import {NavigationContainer} from '@react-navigation/native';
import {persistor, store} from '@redux/store';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider loading={null}>
          <NavigationContainer>
            <ApolloProvider client={apolloClient}>
              <MainStack />
            </ApolloProvider>
          </NavigationContainer>
        </LanguageProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
