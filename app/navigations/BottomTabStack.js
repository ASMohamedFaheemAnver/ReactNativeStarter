import {RouteNames} from '@constants/strings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import React from 'react';

const BottomTabStack = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator initialRouteName={RouteNames.Home}>
      <BottomTab.Screen name={RouteNames.Home} component={Home} />
      <BottomTab.Screen name={RouteNames.Profile} component={Profile} />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;
