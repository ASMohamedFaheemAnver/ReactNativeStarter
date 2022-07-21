import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
const Profile = () => {
  const {t} = useTranslation();
  return <Text>{t('Profile')}</Text>;
};

export default Profile;
