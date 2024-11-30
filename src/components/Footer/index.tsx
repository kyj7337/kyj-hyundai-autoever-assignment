import './index.scss';
import kiaLogo from '@/assets/kiaLogo.svg';

export default function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='logo-side'>
          <img src={kiaLogo} className='company-logo' />
          <div className='copyright'>© 2023 KIA CORP. All Rights Reserved.</div>
        </div>
        <div className='desc-side'>
          <div className='utils'>
            <span className='privacy'>개인정보 처리방침</span>
            <span className='terms'>이용약관</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
