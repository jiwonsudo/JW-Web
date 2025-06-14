import { useTranslation } from "react-i18next";

import { Container } from "./ui/Container";
import { NavBtn, Navbar } from "./ui/Navbar";
import { LogoImage, LogoWrapper } from "./ui/Logo";

import { useHeaderVisibility } from './model/useHeaderVisibility';
import { LanguageToggleBtn } from './ui/LanguageToggleBtn';

export const Header = () => {
  const { t } = useTranslation();
  const isNavVisible = useHeaderVisibility();

  return (
    <Container $isNavVisible={isNavVisible}>
      <LogoWrapper>
          <LogoImage src='/images/header/logo.webp' alt="logo" />
      </LogoWrapper>

      <Navbar>
        <NavBtn>{t('nav_home')}</NavBtn>
        <NavBtn>{t('nav_about')}</NavBtn>
        <NavBtn>{t('nav_showcase')}</NavBtn>
      </Navbar>

      <LanguageToggleBtn />
    </Container>
  );
};