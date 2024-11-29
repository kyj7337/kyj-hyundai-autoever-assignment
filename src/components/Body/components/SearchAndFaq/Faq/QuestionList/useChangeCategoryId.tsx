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
  const { setOffset, searchAction } = useSearchStore();

  // useEffect(() => {
  //   if (searchAction) {
  //     setFaqListData([]);
  //     setSelectIdx(null);
  //     setOffset(0);
  //   }
  // }, [searchAction]);

  useEffect(() => {
    setFaqListData([]);
    setSelectIdx(null);
    setOffset(0);
  }, [categoryId, selectTab]);
}
