import { useEffect, useState } from 'react';

export const useHeaderVisibility = (delay = 200) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    setTimeout(() => {
        setIsHeaderVisible(true);
        sessionStorage.setItem('hasVisited', 'true');
      }, delay);
  }, []);

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
