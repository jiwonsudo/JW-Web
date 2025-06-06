import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 50px;
  border-bottom: 0.1px ${(props) => props.theme.colors.dividerColor} solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bgColor};
`;

const LogoWrapper = styled.div`
  margin-left: 15px;
  width: 30px;
  aspect-ratio: 1;
  line-height: 10px;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const MenuWrapper = styled.div`
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuButton = styled.button`
  font-size: small;
  font-weight: 400;
  background: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = ({ theme }) => {

  return (
    <Container>
      <LogoWrapper>
        <Link to="/">
          <LogoImage src={
            theme === 'light' 
                ? '/images/logo_black.webp' 
                : '/images/logo_white.webp'
          } alt="logo"/>
        </Link>
      </LogoWrapper>
      <MenuWrapper>
        <Link to="/about">
          <MenuButton>About</MenuButton>
        </Link>
        <Link to="/showcase">
          <MenuButton>Showcase</MenuButton>
        </Link>
      </MenuWrapper>
    </Container>
  );
}

export default Navbar;