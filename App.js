import LanguageProvider from '@provider/LanguageProvider';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {persistor, store} from '@redux/store';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider loading={null}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
          </NavigationContainer>
        </LanguageProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
