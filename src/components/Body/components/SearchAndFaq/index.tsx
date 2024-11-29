import { Tab } from '../..';
import './index.scss';
import Search from './Search';
import Faq from './Faq';

interface SearchFaqProps {
  selectTab: Tab;
}

export default function SearchFaq(props: SearchFaqProps) {
  const { selectTab } = props;

  return (
    <div>
      <Search />
      <Faq selectTab={selectTab} />
    </div>
  );
}
