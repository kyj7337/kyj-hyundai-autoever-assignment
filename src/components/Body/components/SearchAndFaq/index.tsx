import { Tab } from '../..';
import './index.scss';
import Search from './Search';
import Faq from './Faq';
import SearchResult from './SearchResult';

interface SearchFaqProps {
  selectTab: Tab;
}

export default function SearchFaq(props: SearchFaqProps) {
  const { selectTab } = props;

  return (
    <div>
      <Search />
      <SearchResult show={false} />
      <Faq selectTab={selectTab} />
    </div>
  );
}
