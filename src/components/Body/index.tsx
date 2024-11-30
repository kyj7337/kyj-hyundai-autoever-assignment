import { useState } from 'react';
import Title from './components/Title';
import './index.scss';
import Tabs from './components/Tabs';
import SearchFaq from './components/SearchAndFaq';
import ServiceInquiry from './components/ServiceInquiry';
import Process from './components/Process';
import TopMoveBtn from './components/TopMoveBtn';
import AppBanner from './components/AppBanner';

export type Tab = 'intro' | 'use';

export default function Body() {
  const [selectTab, setSelectTab] = useState<Tab>('intro');

  return (
    <section className='body-container'>
      <div className='content'>
        <Title />
        <Tabs selectTab={selectTab} setSelectTab={setSelectTab} />
        <SearchFaq selectTab={selectTab} />
        <ServiceInquiry />
        <Process />
        <AppBanner />
      </div>
      <TopMoveBtn />
    </section>
  );
}
