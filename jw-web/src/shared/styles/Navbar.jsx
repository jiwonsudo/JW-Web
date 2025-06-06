import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 50px;
  border-bottom: 0.1px ${(props) => props.theme.colors.dividerColor} solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bgColor};

  position: fixed;
  top: 0; left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.$isNavVisible ? 'translateY(0)' : 'translateY(-50px)')};
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
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const homeNavShowDelay = 3000;

  const handleNavVisible = () => {
    const currScrollY = window.scrollY;

    console.log(currScrollY);
    
    // if scroll down : up
    currScrollY > prevScrollY ? setIsNavVisible(false) : setIsNavVisible(true);

    setPrevScrollY(currScrollY);
  }

  // check if this is Home
  useEffect(() => {
    if (window.location.pathname === '/') {
      setIsNavVisible(false);
      setTimeout(() => {
        setIsNavVisible(true);
      }, homeNavShowDelay);
    } else setIsNavVisible(true);
  }, [window.location.pathname]);

  // handle visiblity by scrollY
  useEffect(() => {
    const handleScroll = () => {
      handleNavVisible();
    };

    let throttleTimeout;
    const throttle = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 100);  // handle scroll every 100ms
      }
    };

    window.addEventListener('scroll', throttle);

    return () => {
      window.removeEventListener('scroll', throttle);
    }
  }, [prevScrollY]);

  return (
    <Container $isNavVisible={isNavVisible}>
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