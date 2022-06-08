import Home from '@screens/Home';
import Profile from '@screens/Profile';
import React from 'react';

const {createStackNavigator} = require('@react-navigation/stack');

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default MainStack;
