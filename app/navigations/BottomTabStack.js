import {RouteNames} from '@constants/strings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import React from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const BottomTabStack = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator initialRouteName={RouteNames.Home}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => <EntypoIcon name="home" />,
        }}
        name={RouteNames.Home}
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <IoniconsIcon name="person" />
          ),
        }}
        name={RouteNames.Profile}
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;
