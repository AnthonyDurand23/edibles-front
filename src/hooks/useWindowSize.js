import { useState, useEffect } from 'react';

const getWidth = () => window.innerWidth;
const getHeight = () => window.innerHeight;

export const useWindowSize = () => {
  const [width, setWidth] = useState(getWidth());
  const [height, setHeight] = useState(getHeight());

  const handleResize = () => {
    setWidth(getWidth());
    setHeight(getHeight());
  };

  useEffect(() => {
    window.addEventListener('resize', () => handleResize());
    return () => window.removeEventListener('resize', () => setWidth(getWidth()));
  }, []);
  return { width, height };
};
