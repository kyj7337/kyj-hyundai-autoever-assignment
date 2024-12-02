import logo from '@/assets/logo.svg';
import './index.scss';
import { UIEvent, useEffect, useState, WheelEvent } from 'react';
import useScrollClassName from './hooks/useScrollClassName';
import HamburgerBtn from './components/HamburgerBtn';

const headerItems = [
  {
    title: '서비스 소개',
    path: 'https://wiblebiz.kia.com/Guide',
  },
  {
    title: '자주 묻는 질문',
    path: '/',
  },
  {
    title: '새소식',
    path: 'https://wiblebiz.kia.com/News',
  },
  {
    title: '상담문의',
    path: 'https://wiblebiz.kia.com/Counsel',
  },
];

export default function Header() {
  const pathname = window.location.pathname;
  const { headerClassName } = useScrollClassName();
  const [open, setOpen] = useState(false);

  return (
    <header className={`header-container ${headerClassName}`}>
      <div className='header-inner'>
        <img className='logo' src={logo} />
        <div className='header-item-container'>
          <ul>
            {headerItems.map((item) => {
              const aTagName = pathname === item.path ? 'select' : '';
              return (
                <li key={item.title}>
                  <a className={aTagName} href={item.path}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='hamburger-btn'>
          <HamburgerBtn open={open} setOpen={setOpen} />
        </div>
      </div>
    </header>
  );
}
