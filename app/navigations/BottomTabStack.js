import {IconNames, RouteNames} from '@constants/strings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

const BottomTabStack = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator initialRouteName={RouteNames.Home}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <EntypoIcon color={color} name={IconNames.home} />
          ),
        }}
        name={RouteNames.Home}
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, focused, size}) => (
            <IoniconsIcon color={color} name={IconNames.person} />
          ),
        }}
        name={RouteNames.Profile}
        component={Profile}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabStack;
