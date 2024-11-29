import { ItemsEntity } from '@/apis/useGetFaqList';
import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';
import { Dispatch, SetStateAction, useEffect } from 'react';

/** 카테고리, 탭이 달라지면 배열, 선택 항목들을 초기화 한다. */
export default function useChangeCategoryId({
  categoryId,
  setFaqListData,
  setSelectIdx,
  selectTab,
}: {
  categoryId: string;
  setFaqListData: Dispatch<SetStateAction<ItemsEntity[]>>;
  setSelectIdx: Dispatch<SetStateAction<number | null>>;
  selectTab: Tab;
}) {
  const { setOffset, searchAction, setSearchAction } = useSearchStore();

  /** 검색어를 입력하여 FAQ 요청을 할 경우 */
  useEffect(() => {
    setFaqListData([]);
    setSelectIdx(null);
    setOffset(0);
  }, [searchAction]);

  /** 탭, 카테고리가 변경됐을 경우 */
  useEffect(() => {
    setFaqListData([]);
    setSelectIdx(null);
    setOffset(0);
    setSearchAction(false);
  }, [categoryId, selectTab]);
}
