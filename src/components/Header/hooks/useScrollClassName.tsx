import { useEffect, useState } from 'react';

/** 스크롤을 하면 헤더에 그림자 클래스 이름 추가 */
export default function useScrollClassName() {
  const [headerClassName, setHeaderClassName] = useState('');

  const handleScroll = () => {
    const scrollHeight = window.scrollY;
    if (scrollHeight > 0) setHeaderClassName('fin');
    else setHeaderClassName('');
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return {
    headerClassName,
  };
}
