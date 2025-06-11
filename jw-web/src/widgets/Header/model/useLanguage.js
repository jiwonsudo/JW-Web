import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    const setLang = language === 'ko' ? 'en' : 'ko';
    setLanguage(setLang);
    localStorage.setItem('setLang_JW', setLang);
  };

  return { language, toggleLanguage };
};
