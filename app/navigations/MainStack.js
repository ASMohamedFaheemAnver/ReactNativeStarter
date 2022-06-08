import {RouteNames} from '@constants/strings';
import Loading from '@screens/Loading';
import React from 'react';
import BottomTabStack from './BottomTabStack';

const {createStackNavigator} = require('@react-navigation/stack');

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={RouteNames.Loading}>
      <Stack.Screen name={RouteNames.Loading} component={Loading} />
      <Stack.Screen
        options={{headerShown: false}}
        name={RouteNames.BottomTabStack}
        component={BottomTabStack}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
