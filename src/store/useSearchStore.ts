import { create } from 'zustand';

interface SearchStore {
  /** 검색 키워드 */
  searchString: string;
  setSearchString: (v: string) => void;
  /** 카테고리 */
  categoryId: string;
  setCategoryId: (v: string) => void;
  /** 검색 키워드 입력 후 전송 */
  searchAction: boolean;
  setSearchAction: (v: boolean) => void;

  // * 이하 FAQ API params

  limit: number;
  setLimit: (v: number) => void;
  offset: number;
  setOffset: (v: number) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchString: '',
  setSearchString(v) {
    set({ searchString: v });
  },
  categoryId: '',
  setCategoryId(v) {
    set({ categoryId: v });
  },
  searchAction: false,
  setSearchAction(v) {
    set({ searchAction: v });
  },
  limit: 10,
  setLimit(v) {
    set({ limit: v });
  },
  offset: 0,
  setOffset(v) {
    set({ offset: v });
  },
}));
