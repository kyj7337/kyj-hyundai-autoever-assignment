import useScrollDetect from '@/hooks/useScrollDetect';
import arrowUpIcon from '@/assets/arrowUp.svg';
import './index.scss';

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
    <div className={`top-move-btn ${showClassName}`} onClick={onClickBtn}>
      <img src={arrowUpIcon} />
    </div>
  );
}
