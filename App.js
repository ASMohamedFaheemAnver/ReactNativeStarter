import MainStack from '@navigations/MainStack';
import LanguageProvider from '@providers/LanguageProvider';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {persistor, store} from '@redux/store';
import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider loading={null}>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </LanguageProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
