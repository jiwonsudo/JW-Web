import { useEffect, useState } from 'react';

export const useHeaderVisibility = (pathname, delay = 3000) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  // 첫 방문 시 홈에서 3초 후 보여주기
  useEffect(() => {
    if (pathname === '/') {
      if (!sessionStorage.getItem('hasVisited')) {
        setIsHeaderVisible(false);
        setTimeout(() => {
          setIsHeaderVisible(true);
          sessionStorage.setItem('hasVisited', 'true');
        }, delay);
      } else {
        setIsHeaderVisible(true);
      }
    } else {
      setIsHeaderVisible(true);
    }
  }, [pathname, delay]);

  // 스크롤 방향 감지
  useEffect(() => {
    const handleScroll = () => {
      const curr = window.scrollY;
      setIsHeaderVisible(curr < prevScrollY);
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

  return isHeaderVisible;
};
