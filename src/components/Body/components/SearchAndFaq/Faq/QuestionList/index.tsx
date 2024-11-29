import useGetFaqList, { ItemsEntity } from '@/apis/useGetFaqList';
import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import arrowDown from '@/assets/arrowDown.svg';
import './index.scss';
import useChangeCategoryId from './useChangeCategoryId';

interface ListItemProps {
  item: ItemsEntity;
  setSelectIdx: Dispatch<SetStateAction<number | null>>;
  selectIdx: number | null;
  itemIdx: number;
}

const ListItem = (props: ListItemProps) => {
  const { item, selectIdx, setSelectIdx, itemIdx } = props;
  const answerRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    if (selectIdx === itemIdx) setSelectIdx(null);
    else setSelectIdx(itemIdx);
  };

  const isSelected = selectIdx === itemIdx;
  const selectClassName = isSelected ? 'selected' : '';

  return (
    <div className='faq-list' key={item.id}>
      <div onClick={onClick} className={`question-section ${selectClassName}`}>
        <div className='sub-category'>{item.subCategoryName}</div>
        <div className='question'>{item.question}</div>
        <img className={`arrow-btn ${selectClassName}`} src={arrowDown} />
      </div>
      <div
        ref={answerRef}
        style={{
          height: isSelected ? `${Number(answerRef.current?.scrollHeight)}px` : '0',
        }}
        className='answer-section'
      >
        <div className='inner' dangerouslySetInnerHTML={{ __html: item.answer }} />
      </div>
    </div>
  );
};

export default function QuestionList({ selectTab }: { selectTab: Tab }) {
  const { data: faqRawData } = useGetFaqList(selectTab);
  const { setOffset, categoryId } = useSearchStore();
  const [selectIdx, setSelectIdx] = useState<number | null>(null);

  const [faqListData, setFaqListData] = useState<ItemsEntity[]>([]);

  useChangeCategoryId({
    categoryId,
    setFaqListData,
    setSelectIdx,
  });

  useEffect(() => {
    if (faqRawData) setFaqListData((prev) => [...prev, ...faqRawData.items]);
  }, [faqRawData, categoryId]);

  if (faqRawData) {
    /** 다음 데이터 존재하는지 여부 */
    const nextExist = faqRawData?.pageInfo?.nextOffset > 0;
    console.log(faqListData);
    return (
      <div className='faq-container'>
        {faqListData.map((item, idx) => {
          return <ListItem item={item} itemIdx={idx} key={item.id} selectIdx={selectIdx} setSelectIdx={setSelectIdx} />;
        })}
      </div>
    );
  }
}
