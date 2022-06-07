import {resources} from '@lang';
import i18n from 'i18next';
import {useEffect, useState} from 'react';
import {initReactI18next} from 'react-i18next';

const LanguageProvider = ({children, loading}) => {
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
  if (!isLanguageLoaded) return loading;
  return children;
};

export default LanguageProvider;
