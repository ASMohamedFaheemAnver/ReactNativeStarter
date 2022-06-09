import {gql, useQuery} from '@apollo/client';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
const Home = () => {
  const {t} = useTranslation();
  const counter = useSelector(state => state.counter);
  const application = useSelector(state => state.application);
  const dispatch = useDispatch();
  const DEMO_QUERY = gql`
    query {
      comments {
        data {
          id
        }
      }
    }
  `;
  const {data, error} = useQuery(DEMO_QUERY);
  console.log({data, error});
  useEffect(() => {
    // dispatch(changeLanguage('spanish'));
  }, []);
  console.log({count: counter.count, application});
  return <Text>{t('Home')}</Text>;
};

export default Home;
