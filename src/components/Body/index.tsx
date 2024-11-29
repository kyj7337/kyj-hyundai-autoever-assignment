import { useState } from 'react';
import Title from './components/Title';
import './index.scss';
import Tabs from './components/Tabs';
import SearchFaq from './components/SearchAndFaq';
import SearchResult from './components/SearchAndFaq/SearchResult';

export type Tab = 'intro' | 'use';

export default function Body() {
  const [selectTab, setSelectTab] = useState<Tab>('intro');

  return (
    <section className='body-container'>
      <div className='content'>
        <Title />
        <Tabs selectTab={selectTab} setSelectTab={setSelectTab} />
        <SearchFaq selectTab={selectTab} />
        <SearchResult show={false} />
      </div>
    </section>
  );
}
