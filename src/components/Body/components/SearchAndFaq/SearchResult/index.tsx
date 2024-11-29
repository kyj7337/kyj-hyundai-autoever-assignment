import { Tab } from '@/components/Body';
import './index.scss';
import resetBtn from '@/assets/turn.svg';
import useGetFaqList from '@/apis/useGetFaqList';
import { useSearchStore } from '@/store/useSearchStore';
interface SearchResultProps {
  show: boolean;
  selectTab: Tab;
}
export default function SearchResult({ show, selectTab }: SearchResultProps) {
  const { setSearchAction, setSearchString } = useSearchStore();
  const resetSearch = () => {
    setSearchAction(false);
    setSearchString('');
  };
  const { data } = useGetFaqList(selectTab);
  if (show) {
    const count = data?.items.length;
    return (
      <div className='search-result-container'>
        <h2>
          검색결과 총 <span>{count}</span>건
        </h2>
        <div onClick={resetSearch} className='search-reset-btn'>
          <img src={resetBtn} />
          <span>검색초기화</span>
        </div>
      </div>
    );
  }
  return <></>;
}
