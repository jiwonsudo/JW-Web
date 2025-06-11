import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from './resources';

const currLang = localStorage.getItem('setLang_JW') || 'ko';
const anotherLang = currLang === 'ko' ? 'en' : 'ko';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: currLang,
    fallbackLng: anotherLang,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;