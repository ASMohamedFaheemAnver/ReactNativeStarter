import {resources} from '@lang';
import {persistor, store} from '@redux/store';
import i18n from 'i18next';
import React, {useEffect, useState} from 'react';
import {initReactI18next, useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';
import {Provider as ReduxProvider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  const [isLanguageLoaded, setIsLanguageLoaded] = useState(false);
  useEffect(() => {
    i18n
      .use(initReactI18next)
      .init({
        compatibilityJSON: 'v3',
        resources: resources,
        lng: 'tml',
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
      })
      .then(_ => {
        setIsLanguageLoaded(true);
      })
      .catch(error => {
        console.log({error});
      });
  }, []);
  if (!isLanguageLoaded)
    return <View style={{flex: 1, backgroundColor: 'red'}}></View>;
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Child></Child>
      </PersistGate>
    </ReduxProvider>
  );
};

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

export default App;
