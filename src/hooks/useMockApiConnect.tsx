import { initMockAPI } from '@/mocks';
import { useEffect, useState } from 'react';

/** MSW가 실행됨을 확인한다. */
export default function useMockApiConnect() {
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  useEffect(() => {
    initMockAPI().then(() => setIsReadyToRender(true));
    return () => {};
  }, []);
  return {
    isReadyToRender,
  };
}
