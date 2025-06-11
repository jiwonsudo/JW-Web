import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container } from "./ui/Container";
import { NavBtn, Navbar } from "./ui/Navbar";
import { LogoImage, LogoWrapper } from "./ui/Logo";

import { useHeaderVisibility } from './model/useHeaderVisibility';
import { LanguageToggleBtn } from './ui/LanguageToggleBtn';

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isNavVisible = useHeaderVisibility(location.pathname);

  return (
    <Container $isNavVisible={isNavVisible}>
      <LogoWrapper>
        <Link to="/">
          <LogoImage src='/images/header/logo_black.webp' alt="logo" />
        </Link>
      </LogoWrapper>

      <Navbar>
        <Link to="/"><NavBtn>{t('nav_home')}</NavBtn></Link>
        <Link to="/about"><NavBtn>{t('nav_about')}</NavBtn></Link>
        <Link to="/showcase"><NavBtn>{t('nav_showcase')}</NavBtn></Link>
      </Navbar>

      <LanguageToggleBtn />
    </Container>
  );
};