import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json';
import frTranslation from './locales/fr.json';
import viTranslation from './locales/vi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      vi: { translation: viTranslation }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
