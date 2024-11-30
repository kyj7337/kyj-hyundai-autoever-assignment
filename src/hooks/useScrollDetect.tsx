import { useEffect, useState } from 'react';

/** 스크롤을 했는지 체크해준다. */
export default function useScrollDetect() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 0) setIsScrolling(true);
    else setIsScrolling(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return isScrolling;
}
