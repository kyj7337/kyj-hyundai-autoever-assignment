import useScrollDetect from '@/hooks/useScrollDetect';

/** 스크롤을 하면 헤더에 그림자 클래스 이름 추가 */
export default function useScrollClassName() {
  const isScroll = useScrollDetect();
  return {
    headerClassName: isScroll ? 'fin' : '',
  };
}
