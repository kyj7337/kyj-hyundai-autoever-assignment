import { Tab } from '../..';
import './index.scss';
import Search from './Search';
import Faq from './Faq';
import SearchResult from './SearchResult';
import useGetFaqList from '@/apis/useGetFaqList';
import { useSearchStore } from '@/store/useSearchStore';

interface SearchFaqProps {
  selectTab: Tab;
}

export default function SearchFaq(props: SearchFaqProps) {
  const { selectTab } = props;
  const { searchAction } = useSearchStore();

  return (
    <div>
      <Search />
      <SearchResult show={searchAction} selectTab={selectTab} />
      <Faq selectTab={selectTab} />
    </div>
  );
}
