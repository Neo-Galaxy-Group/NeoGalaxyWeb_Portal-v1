import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    backend: {
      loadPath: '/assets/locales/{{lng}}.json', 
    },
    detection: {
      order: ['navigator', 'localStorage'],
      caches: [],
    },
    fallbackLng: 'en-US',
    interpolation: {
      escapeValue: false // React è già protetto da XSS
    }
  });

export default i18n;