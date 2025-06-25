import { useEffect, useState } from 'react';

const breakpoints = {
  xsm: 500,
  sm: 640,
  md: 800,
  lgc:950,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export default function useBreakpoint() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isAbove = (key) => width >= breakpoints[key];
  const isBelow = (key) => width < breakpoints[key];

  return {
    width,
    isXsm: isAbove('xsm'),
    isSm: isAbove('sm'),
    isMd: isAbove('md'),
    isLg: isAbove('lg'),
    isLgc: isAbove('lgc'),
    isXl: isAbove('xl'),
    is2xl: isAbove('2xl'),
    isAbove,
    isBelow,
  };
}
