import LanguageProvider from '@provider/LanguageProvider';
import {persistor, store} from '@redux/store';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Text} from 'react-native';
import {Provider as ReduxProvider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LanguageProvider loading={null}>
          <Child></Child>
        </LanguageProvider>
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
