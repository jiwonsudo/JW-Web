import { useEffect, useState } from 'react';

export const useNavbarVisibility = (pathname, delay = 3000) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  // 첫 방문 시 홈에서 3초 후 보여주기
  useEffect(() => {
    if (pathname === '/') {
      if (!sessionStorage.getItem('hasVisited')) {
        setIsNavVisible(false);
        setTimeout(() => {
          setIsNavVisible(true);
          sessionStorage.setItem('hasVisited', 'true');
        }, delay);
      } else {
        setIsNavVisible(true);
      }
    } else {
      setIsNavVisible(true);
    }
  }, [pathname, delay]);

  // 스크롤 방향 감지
  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      setIsNavVisible(curr < prevScrollY);
      setPrevScrollY(curr);
    };

    let throttleTimeout;
    const throttled = () => {
      if (!throttleTimeout) {
        throttleTimeout = setTimeout(() => {
          handleScroll();
          throttleTimeout = null;
        }, 100);
      }
    };

    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, [prevScrollY]);

  return isNavVisible;
};
