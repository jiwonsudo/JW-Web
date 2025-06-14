import React from 'react';
import { useTranslation } from 'react-i18next'; // i18n을 사용하기 위해 import 합니다.

/**
 * i18n 키를 받아 번역하고, 번역된 텍스트 내의 줄바꿈 문자('\n')를 HTML <br/> 태그로 변환하여 JSX를 반환하는 커스텀 훅.
 * @param {string} key - 번역할 i18n 키 (예: 'info_preview_projects').
 * @returns {React.ReactNode} <br/> 태그가 적용된 JSX 요소.
 */
export const useBreakText = (key) => {
  const { t } = useTranslation();
  const translatedText = t(key);
 
  const brokenText = translatedText.split('\n').map((line, index, array) => (
    <React.Fragment key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));

  return brokenText;
};