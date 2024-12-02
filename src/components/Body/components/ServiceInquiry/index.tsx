import { ReactElement } from 'react';
import documentIcon from '@/assets/documentIcon.svg';
import pencilIcon from '@/assets/pencilIcon.svg';
import kakaoIcon from '@/assets/kakaoIcon.svg';
import './index.scss';

interface InquiryItem {
  icon: ReactElement;
  name: string;
  desc?: string;
  link: string;
  download?: boolean;
}

const items: InquiryItem[] = [
  {
    icon: <img src={documentIcon} className='inquiry-ic' />,
    name: '상품제안서 다운로드',
    link: '/product_proposal.pdf',
    download: true,
  },
  {
    icon: <img src={pencilIcon} className='inquiry-ic' />,
    name: '상담문의 등록하기',
    link: 'https://wiblebiz.kia.com/Counsel',
  },
  {
    icon: <img src={kakaoIcon} className='inquiry-ic' />,
    name: '카톡으로 문의하기',
    desc: 'ID: Wible Biz(위블 비즈)',
    link: 'https://pf.kakao.com/_xfLxjdb',
  },
];

export default function ServiceInquiry() {
  return (
    <div className='service-inquiry-container'>
      <h2>서비스 문의</h2>
      <div className='inquiry-box'>
        {items.map((item) => {
          return (
            <a
              href={item.link}
              download={item.download && 'wiblebiz 상품제안서.pdf'}
              target='_blank'
              className='inquiry-item'
              key={item.name}
            >
              {item.icon}
              <div className='desc-txt'>
                <div className='desc'>{item.name}</div>
                {item.desc && <div className='sub-desc'>{item.desc}</div>}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
