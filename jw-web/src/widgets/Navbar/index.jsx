import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Container } from "./ui/Container";
import { MenuBtn, MenuWrapper } from "./ui/MenuBtns";
import { LogoImage, LogoWrapper } from "./ui/Logo";

import { useNavbarVisibility } from './model/useNavbarVisibility';
import { LanguageToggleBtn } from '../../features/language/ui/LanguageToggleBtn';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isNavVisible = useNavbarVisibility(location.pathname);

  return (
    <Container $isNavVisible={isNavVisible}>
      <LogoWrapper>
        <Link to="/">
          <LogoImage src='/images/logo_black.webp' alt="logo" />
        </Link>
      </LogoWrapper>

      <MenuWrapper>
        <Link to="/"><MenuBtn>{t('menu_home')}</MenuBtn></Link>
        <Link to="/about"><MenuBtn>{t('menu_about')}</MenuBtn></Link>
        <Link to="/showcase"><MenuBtn>{t('menu_showcase')}</MenuBtn></Link>
      </MenuWrapper>

      <LanguageToggleBtn />
    </Container>
  );
};

export default Navbar;