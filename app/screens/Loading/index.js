import React, {useEffect} from 'react';
import {Text} from 'react-native';
const Loading = ({navigation}) => {
  useEffect(() => {
    navigation.navigate('BottomTabStack');
  }, []);
  return <Text>Loading</Text>;
};

export default Loading;
