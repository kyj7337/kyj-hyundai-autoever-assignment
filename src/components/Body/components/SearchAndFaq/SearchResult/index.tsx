import './index.scss';
import resetBtn from '@/assets/turn.svg';
interface SearchResultProps {
  show: boolean;
}
export default function SearchResult({ show }: SearchResultProps) {
  // TODO: 검색을 하게 되면 무조건 보여져야함.
  if (show)
    return (
      <div className='search-result-container'>
        <h2>
          검색결과 총 <span>0</span>건
        </h2>
        <div className='search-reset-btn'>
          <img src={resetBtn} />
          <span>검색초기화</span>
        </div>
      </div>
    );
  return <></>;
}
