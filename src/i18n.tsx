import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';

// Importazione diretta dei file JSON
import EN_US from './assets/locales/en_us.json';
import IT_IT from './assets/locales/it_it.json';

const resources = {
  "en-US": {
    translation: EN_US
  },
  "it-IT": {
    translation: IT_IT
  }
};

i18n
  .use(LanguageDetector) // Rileva la lingua dell'utente
  .use(initReactI18next) // Inizializza il plugin per React
  .init({
    resources,
    fallbackLng: 'en-US',
    detection: {
      order: ['navigator', 'localStorage'], // Cerca prima nel storage, poi nel browser
      caches: [], // Salva la scelta nel localStorage
    },
    interpolation: {
      escapeValue: false // React è già protetto da XSS
    }
  });

export default i18n;