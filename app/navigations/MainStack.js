import Loading from '@screens/Loading';
import React from 'react';
import BottomTabStack from './BottomTabStack';

const {createStackNavigator} = require('@react-navigation/stack');

const MainStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen
        options={{headerShown: false}}
        name="BottomTabStack"
        component={BottomTabStack}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
