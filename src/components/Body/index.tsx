import { useState } from 'react';
import Title from './components/Title';
import './index.scss';

type Tab = 'intro' | 'use';

export default function Body() {
  const [selectTab, setSelectTab] = useState<Tab>('intro');
  return (
    <section className='body-container'>
      <div className='content'>
        <Title />
      </div>
    </section>
  );
}
