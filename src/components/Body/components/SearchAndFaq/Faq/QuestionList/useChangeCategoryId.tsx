import { ItemsEntity } from '@/apis/useGetFaqList';
import { Dispatch, SetStateAction, useEffect } from 'react';

/** 카테고리가 달라지면 배열, 선택 항목들을 초기화 한다. */
export default function useChangeCategoryId({
  categoryId,
  setFaqListData,
  setSelectIdx,
}: {
  categoryId: string;
  setFaqListData: Dispatch<SetStateAction<ItemsEntity[]>>;
  setSelectIdx: Dispatch<SetStateAction<number | null>>;
}) {
  useEffect(() => {
    setFaqListData([]);
    setSelectIdx(null);
  }, [categoryId]);
}
