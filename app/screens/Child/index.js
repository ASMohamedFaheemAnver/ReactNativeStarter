import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
const Child = () => {
  const {t} = useTranslation();
  const counter = useSelector(state => state.counter);
  const application = useSelector(state => state.application);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(changeLanguage('spanish'));
  }, []);
  console.log({count: counter.count, application});
  return <Text>{t('init')}</Text>;
};

export default Child;
