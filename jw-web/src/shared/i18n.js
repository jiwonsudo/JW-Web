import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  ko: {
    translation: {
      menu_home: '홈',
      menu_about: '프로필',
      menu_showcase: '쇼케이스',
      title_1: '아이디어',
      title_2: '를 현실로.',
      title_3: '최고의 경험과 함께.'

    }
  },
  en: {
    translation: {
      menu_home: 'Home',
      menu_about: 'About',
      menu_showcase: 'Showcase',
      title_1: 'Ideas',
      title_2: ' into Reality.',
      title_3: 'with the best experience.'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;