import {RouteNames} from '@constants/strings';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
const Loading = ({navigation}) => {
  const {t} = useTranslation();
  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [{name: RouteNames.BottomTabStack}],
    });
  }, []);
  return <Text>{t('Home')}</Text>;
};

export default Loading;
