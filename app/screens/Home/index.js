import {useQuery} from '@apollo/client';
import {GET_ALL_COMMENTS_QUERY} from '@graphql/queries/comment';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
const Home = () => {
  const {t} = useTranslation();
  const counter = useSelector(state => state.counter);
  const application = useSelector(state => state.application);
  const dispatch = useDispatch();

  // Defining useQuery will sperm server on every state change
  const {data, error} = useQuery(GET_ALL_COMMENTS_QUERY);
  console.log({data, error});
  useEffect(() => {
    // dispatch(changeLanguage('spanish'));
  }, []);
  console.log({count: counter.count, application});
  return <Text>{t('Home')}</Text>;
};

export default Home;
