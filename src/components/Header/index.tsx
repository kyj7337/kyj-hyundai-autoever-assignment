import logo from '@/assets/logo.svg';
import './index.scss';

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
  return (
    <header className='header-container'>
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
        {/* //TODO: 메뉴 버튼 사라지고 나타나는 애니메이션 작업하기 */}
      </div>
    </header>
  );
}
