import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const smoothScrollOptions = {
      top: 0,
      behavior: 'smooth',
    };

    window.scrollTo(smoothScrollOptions);
  }, [location.pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
