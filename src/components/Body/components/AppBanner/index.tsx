import './index.scss';
import googleStoreIcon from '@/assets/googlePlayStore.svg';
import appleStoreIcon from '@/assets/appleStore.svg';

const googlePlayLink = 'https://play.google.com/store/apps/details?id=kor.mop.user.app';
const appStoreLink = 'https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794';

const Apps = [
  {
    name: 'Google Play',
    img: <img src={googleStoreIcon} className='app-icon' />,
    link: googlePlayLink,
  },
  {
    name: 'App Store',
    img: <img src={appleStoreIcon} className='app-icon' />,
    link: appStoreLink,
  },
];

export default function AppBanner() {
  return (
    <div className='app-banner-container'>
      <h2>
        <span className='accent'>위블 비즈 App</span>
        <span> 지금 만나보세요!</span>
      </h2>
      <div className='store-container'>
        {Apps.map((item) => (
          <a href={item.link} className='store-box' key={item.name}>
            {item.img}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
