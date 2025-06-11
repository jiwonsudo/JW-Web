import styled from "styled-components";
import { useLanguage } from "../model/useLanguage";

const ToggleBtn = styled.button`
  margin-right: 15px;
  width: 23px;
  aspect-ratio: 1;
  color: #0e1111;
  background-image: url('/images/translate.webp');
  border: none;
  background-size: cover;
  background-position: center; /* 배경 이미지 위치 조정 */
  background-repeat: no-repeat;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

export const LanguageToggleBtn = () => {
  const { toggleLanguage } = useLanguage();

  return <ToggleBtn onClick={toggleLanguage} aria-label="언어 선택 / Choose Language"/>;
};
