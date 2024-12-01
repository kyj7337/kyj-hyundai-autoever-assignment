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
          <address className='address-infos'>
            <span>서울특별시 서초구 헌릉로 12</span>
            <span>기아㈜</span>
            <span>대표: 송호성, 최준영</span>
            <span>사업자등록번호: 119-81-02316</span>
            <span>통신판매번호: 2006-07935</span>
            <span>고객센터: 1833-4964</span>
            <span>
              제휴문의:{' '}
              <a className='email-to' href='mailto:wible.biz@kia.com'>
                wible.biz@kia.com
              </a>
            </span>
          </address>
        </div>
      </div>
    </footer>
  );
}
