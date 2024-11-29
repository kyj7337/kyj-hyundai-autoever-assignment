import { ChangeEvent } from 'react';
import xIcon from '@/assets/xIcon.svg';
import searchIcon from '@/assets/searchIcon.svg';
import './index.scss';
import { useSearchStore } from '@/store/useSearchStore';

export default function Search() {
  const { searchString, setSearchString, setSearchAction } = useSearchStore();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const onClickReset = () => {
    setSearchString('');
  };

  const hideResetBtn = searchString.length === 0;

  const onClickSearch = () => {
    setSearchAction(true);
  };

  return (
    <div className='search-container'>
      <div className='input-wrapper'>
        <input type='text' value={searchString} onChange={onChange} placeholder='찾으시는 내용을 입력해 주세요' />
        <img src={xIcon} onClick={onClickReset} className={`reset-btn ${hideResetBtn ? 'hide' : 'show'}`} />
        <img src={searchIcon} onClick={onClickSearch} className='search-btn' />
      </div>
    </div>
  );
}
