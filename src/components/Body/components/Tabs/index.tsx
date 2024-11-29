import { Dispatch, SetStateAction } from 'react';
import { Tab } from '../..';
import './index.scss';
import { useSearchStore } from '@/store/useSearchStore';

interface TabsProps {
  selectTab: Tab;
  setSelectTab: Dispatch<SetStateAction<Tab>>;
}

interface TabList {
  label: string;
  isActive: boolean;
  value: Tab;
}

export default function Tabs(props: TabsProps) {
  const { selectTab, setSelectTab } = props;
  const { setSearchAction, setSearchString } = useSearchStore();
  const tabs: TabList[] = [
    {
      label: '서비스 도입',
      isActive: selectTab === 'intro',
      value: 'intro',
    },
    {
      label: '서비스 이용',
      isActive: selectTab === 'use',
      value: 'use',
    },
  ];

  const onClickTab = (target: Tab) => {
    setSelectTab(target);
    setSearchAction(false);
    setSearchString('');
  };

  return (
    <ul className='tabs-container'>
      {tabs.map((tab) => (
        <li onClick={() => onClickTab(tab.value)} key={tab.label} className={tab.isActive ? 'active' : ''}>
          <span>{tab.label}</span>
        </li>
      ))}
    </ul>
  );
}
