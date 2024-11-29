import { useState } from 'react';
import Title from './components/Title';
import './index.scss';
import Tabs from './components/Tabs';

export type Tab = 'intro' | 'use';

export default function Body() {
  const [selectTab, setSelectTab] = useState<Tab>('intro');

  return (
    <section className='body-container'>
      <div className='content'>
        <Title />
        <Tabs selectTab={selectTab} setSelectTab={setSelectTab} />
      </div>
    </section>
  );
}
