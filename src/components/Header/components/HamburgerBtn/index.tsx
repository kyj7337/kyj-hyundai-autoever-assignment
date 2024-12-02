import { Dispatch, SetStateAction } from 'react';
import './index.scss';

interface HamburgerBtnProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function HamburgerBtn(props: HamburgerBtnProps) {
  const { open, setOpen } = props;
  const openClassName = open ? 'open' : 'hide';
  const onClickBtn = () => {
    setOpen((prev) => !prev);
  };
  const lineLength = open ? 22 : 20;
  return (
    <svg
      onClick={onClickBtn}
      className={`hamburger-btn-container ${openClassName}`}
      viewBox='0 0 20 20'
      width={20}
      height={20}
    >
      <line className={`line1 ${openClassName}`} x1='0' y1='4' x2={lineLength} y2='4' stroke='#000' strokeWidth={2} />
      <line className={`line2 ${openClassName}`} x1='0' y1='10' x2='20' y2='10' stroke='#000' strokeWidth={2} />
      <line className={`line3 ${openClassName}`} x1='0' y1='16' x2={lineLength} y2='16' stroke='#000' strokeWidth={2} />
    </svg>
  );
}
