import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      nav_home: '홈',
      nav_about: '프로필',
      nav_showcase: '쇼케이스',
      title_1: '아이디어',
      title_2: '를 현실로.',
      title_3: '최고의 경험과 함께.'

    }
  },
  en: {
    translation: {
      nav_home: 'Home',
      nav_about: 'About',
      nav_showcase: 'Showcase',
      title_1: 'Ideas',
      title_2: ' into Reality.',
      title_3: 'with the best experience.'
    }
  }
};

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