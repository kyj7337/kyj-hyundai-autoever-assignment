import useGetFaqList, { ItemsEntity } from '@/apis/useGetFaqList';
import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';
import { Dispatch, memo, SetStateAction, useEffect, useRef, useState } from 'react';
import arrowDown from '@/assets/arrowDown.svg';
import icFill from '@/assets/icFill.svg';
import './index.scss';
import useChangeCategoryId from './useChangeCategoryId';

interface ListItemProps {
  item: ItemsEntity;
  setSelectIdx: Dispatch<SetStateAction<number | null>>;
  selectIdx: number | null;
  itemIdx: number;
}

const ListItem = memo((props: ListItemProps) => {
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
        className={`answer-section ${selectClassName}`}
      >
        <div className='inner' dangerouslySetInnerHTML={{ __html: item.answer }} />
      </div>
    </div>
  );
});

export default function QuestionList({ selectTab }: { selectTab: Tab }) {
  const { setOffset, categoryId, offset } = useSearchStore();
  const { data: faqRawData } = useGetFaqList(selectTab);

  const [selectIdx, setSelectIdx] = useState<number | null>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const [faqListData, setFaqListData] = useState<ItemsEntity[]>([]);

  useChangeCategoryId({
    categoryId,
    setFaqListData,
    setSelectIdx,
    selectTab,
  });

  useEffect(() => {
    if (faqRawData) {
      setFaqListData((prev) => [...prev, ...faqRawData.items]);
    }
  }, [faqRawData, categoryId]);

  if (faqListData.length >= 1) {
    /** 다음 데이터 존재하는지 여부 */
    const nextExist = faqRawData && faqRawData?.pageInfo?.nextOffset > 0;

    const onClickMoreData = () => {
      setOffset(offset + 10);
    };

    return (
      <div ref={faqRef} className='faq-container'>
        {faqListData.map((item, idx) => {
          return <ListItem item={item} itemIdx={idx} key={item.id} selectIdx={selectIdx} setSelectIdx={setSelectIdx} />;
        })}
        {nextExist && (
          <div onClick={onClickMoreData} className='more-data-load-container'>
            <i className='icon' />
            <span className='more-txt'>더보기</span>
          </div>
        )}
      </div>
    );
  }
  return (
    <div className='empty-result-container'>
      <img src={icFill} className='ic-fill' />
      <span className='empty-result-text'>검색결과가 없습니다.</span>
    </div>
  );
}
