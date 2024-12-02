import { MouseEvent, ReactElement, useRef } from 'react';
import closeIcon from '@/assets/closeIcon.svg';
import './index.scss';

interface ModalProps {
  children: ReactElement;
  show: boolean;
  setShow: (v: boolean) => void;
  title: string;
}

export default function Modal(props: ModalProps) {
  const { children, setShow, show, title } = props;
  const modalContentRef = useRef<HTMLDivElement>(null);
  const onClickClose = () => {
    setShow(false);
  };
  const onClickOutSide = (e: MouseEvent<HTMLDialogElement>) => {
    const target = e.target as Node;

    if (!modalContentRef.current?.contains(target)) {
      onClickClose();
    }
  };

  if (show)
    return (
      <dialog className='modal-container' onClick={onClickOutSide}>
        <div className='modal-content' ref={modalContentRef}>
          <div className='content-header'>
            <h4 className='title'>{title}</h4>
            <img onClick={onClickClose} src={closeIcon} />
          </div>
          <div className='content-children'>{children}</div>
        </div>
      </dialog>
    );

  return <></>;
}
