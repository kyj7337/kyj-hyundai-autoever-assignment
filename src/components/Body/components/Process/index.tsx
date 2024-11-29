import './index.scss';
import process1 from '@/assets/process1.svg';
import process2 from '@/assets/process2.svg';
import process3 from '@/assets/process3.svg';
import process4 from '@/assets/process4.svg';

const processItems = [
  {
    title: '1. 문의 등록',
    icon: <img src={process1} className='process-ic' />,
    desc: '상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.',
  },
  {
    title: '2. 관리자 설정',
    icon: <img src={process2} className='process-ic' />,
    desc: '관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.',
  },
  {
    title: '3. 임직원 가입',
    icon: <img src={process3} className='process-ic' />,
    desc: '사용자 App에서 회원가입 후 소속회사 인증을 진행합니다.',
  },
  {
    title: '4. 서비스 이용',
    icon: <img src={process4} className='process-ic' />,
    desc: '사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!',
  },
];

export default function Process() {
  return (
    <div className='process-container'>
      <h2>이용 프로세스 안내</h2>
      <div className='process-box'>
        {processItems.map((step) => {
          return (
            <div className='process-item'>
              {step.icon}
              <div className='title'>{step.title}</div>
              <div className='desc'>{step.desc}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
