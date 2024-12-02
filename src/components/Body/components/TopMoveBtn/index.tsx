import useScrollDetect from '@/hooks/useScrollDetect';
import arrowUpIcon from '@/assets/arrowUp.svg';
import './index.scss';

/** 최상단으로 이동하는 버튼 */
export default function TopMoveBtn() {
  const isScrolled = useScrollDetect();
  const showClassName = isScrolled ? 'show' : 'hide';

  const onClickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='move-btn-wrapper'>
      <div className={`top-move-btn ${showClassName}`} onClick={onClickBtn}>
        <img src={arrowUpIcon} />
      </div>
    </div>
  );
}
