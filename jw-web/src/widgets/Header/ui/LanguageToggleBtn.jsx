import { useState } from 'react';
import styled from "styled-components";
import { useLanguage } from "../model/useLanguage";
import { DropdownMenu, DropdownMenuItem } from './Dropdown.js';

const LanguageToggleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ToggleBtn = styled.button`
  margin-right: 15px;
  width: 20px;
  aspect-ratio: 1;
  color: #0e1111;
  background-image: url('/images/header/language_toggle.webp');
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
  const { setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const { toggleLanguage } = useLanguage();

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  }

  return (
    <LanguageToggleContainer>
      <ToggleBtn
        onClick={handleToggleDropdown}
        aria-label="언어 선택 / Choose Language"
        aria-expanded={isOpen ? "true" : "false"}
      />
      {isOpen && (
        <DropdownMenu>
          <DropdownMenuItem onClick={() => handleLanguageChange('ko')}>
            한국어
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
            English
          </DropdownMenuItem>
        </DropdownMenu>
      )}
    </LanguageToggleContainer>
  );
};
