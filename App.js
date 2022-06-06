import {resources} from '@language';
import i18n from 'i18next';
import React, {useEffect, useState} from 'react';
import {initReactI18next, useTranslation} from 'react-i18next';
import {Text, View} from 'react-native';

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
  return <Child></Child>;
};

const Child = () => {
  const {t} = useTranslation();
  return <Text>{t('init')}</Text>;
};

export default App;
