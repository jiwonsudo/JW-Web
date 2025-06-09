import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const toggleLanguage = () => {
    const newLangJW = language === 'ko' ? 'en' : 'ko';
    setLanguage(newLangJW);
    localStorage.setItem('lang', newLangJW);
  };

  return { language, toggleLanguage };
};
