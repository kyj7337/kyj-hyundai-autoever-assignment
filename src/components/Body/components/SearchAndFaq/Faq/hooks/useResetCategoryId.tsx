import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';
import { Dispatch, SetStateAction, useEffect } from 'react';

/**
 *
 * @param selectTab 선택한 탭
 * @param setCategoryId
 * @description 탭이 변경될 때 마다 카테고리 id를 초기화 한다.
 */
export default function useResetCategoryId(selectTab: Tab) {
  const { setCategoryId } = useSearchStore();
  useEffect(() => {
    setCategoryId('');
  }, [selectTab]);
}
