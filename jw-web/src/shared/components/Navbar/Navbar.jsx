import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div`
  height: 50px;
  border-bottom: 0.1px #eeede7 solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FAF9F6;
  color: #0e1111;

  position: fixed;
  top: 0; left: 0; right: 0;
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

const MoveWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MoveBtn = styled.button`
  font-size: small;
  font-weight: 400;
  background: transparent;
  border: none;
  color: #0e1111;
  &:hover {
    cursor: pointer;
  }
`;

const ToggleBtn = styled.button`
  margin-right: 15px;
  width: 23px;
  aspect-ratio: 1;
  color: #0e1111;
  background-image: url('/images/translate.png');
  border: none;
  background-size: cover;
  background-position: center; /* 배경 이미지 위치 조정 */
  background-repeat: no-repeat;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
  }
`;

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const location = useLocation();
  const homeNavShowDelay = 3000;

  const handleNavVisible = () => {
    const currScrollY = window.scrollY;
    
    // if scroll down : up
    currScrollY > prevScrollY ? setIsNavVisible(false) : setIsNavVisible(true);

    setPrevScrollY(currScrollY);
  }
  

 
  useEffect(() => {
    if (location.pathname === '/') {  // check if this is Home
      if (!sessionStorage.getItem('hasVisited')) {
        setIsNavVisible(false);

        console.log(sessionStorage.getItem('hasVisited'));
        console.log(location.pathname);
        
        setTimeout(() => {
          setIsNavVisible(true);
          sessionStorage.setItem('hasVisited', 'true');
        }, homeNavShowDelay);
      } else {
        setIsNavVisible(true);
      }
    } else {
      setIsNavVisible(true);
    }
  }, [location.pathname]);

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
          <LogoImage src='/images/logo_black.webp' alt="logo"/>
        </Link>
      </LogoWrapper>
      <MoveWrapper>
        <Link to="/">
          <MoveBtn>Home</MoveBtn>
        </Link>
        <Link to="/about">
          <MoveBtn>About</MoveBtn>
        </Link>
        <Link to="/showcase">
          <MoveBtn>Showcase</MoveBtn>
        </Link>
      </MoveWrapper>
      <ToggleBtn/>
    </Container>
  );
}

export default Navbar;