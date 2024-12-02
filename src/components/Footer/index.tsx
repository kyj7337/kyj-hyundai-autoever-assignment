import { useState } from 'react';
import './index.scss';
import kiaLogo from '@/assets/kiaLogo.svg';
import { useModalStore } from '@/store/useModalStore';

export default function Footer() {
  const { setShowPrivacyModal, setShowTermsModal } = useModalStore();
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
        <div className='logo-side'>
          <img src={kiaLogo} className='company-logo' />
          <div className='copyright'>© 2023 KIA CORP. All Rights Reserved.</div>
        </div>
        <div className='desc-side'>
          <div className='utils'>
            <span onClick={() => setShowPrivacyModal(true)} className='privacy'>
              개인정보 처리방침
            </span>
            <span onClick={() => setShowTermsModal(true)} className='terms'>
              이용약관
            </span>
          </div>
          <address className='address-infos'>
            <span>서울특별시 서초구 헌릉로 12</span>
            <br />
            <span>기아㈜</span>
            <br />
            <span>대표: 송호성, 최준영</span>
            <br />
            <span>사업자등록번호: 119-81-02316</span>
            <br />
            <span>통신판매번호: 2006-07935</span>
            <br />
            <span>고객센터: 1833-4964</span>
            <br />
            <span>
              제휴문의: <a href='mailto:wible.biz@kia.com'>wible.biz@kia.com</a>
            </span>
          </address>
        </div>
      </div>
    </footer>
  );
}
