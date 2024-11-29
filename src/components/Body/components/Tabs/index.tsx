import { Dispatch, SetStateAction } from 'react';
import { Tab } from '../..';
import './index.scss';

interface TabsProps {
  selectTab: Tab;
  setSelectTab: Dispatch<SetStateAction<Tab>>;
}
export default function Tabs(props: TabsProps) {
  const { selectTab, setSelectTab } = props;

  const tabs = [
    {
      label: '서비스 도입',
      isActive: selectTab === 'intro',
    },
    {
      label: '서비스 이용',
      isActive: selectTab === 'use',
    },
  ];

  return (
    <ul className='tabs-container'>
      {tabs.map((tab) => (
        <li key={tab.label} className={tab.isActive ? 'active' : ''}>
          <span>{tab.label}</span>
        </li>
      ))}
    </ul>
  );
}
