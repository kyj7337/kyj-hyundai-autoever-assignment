import { useState } from 'react';
import { Tab } from '../..';
import './index.scss';
import Search from './Search';
import Faq from './Faq';

interface SearchFaqProps {
  selectTab: Tab;
}

export default function SearchFaq(props: SearchFaqProps) {
  const { selectTab } = props;
  const [searchString, setSearchString] = useState('');
  return (
    <div>
      <Search searchString={searchString} setSearchString={setSearchString} />
      <Faq />
    </div>
  );
}
