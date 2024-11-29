import { create } from 'zustand';

interface SearchStore {
  searchString: string;
  setSearchString: (v: string) => void;
  categoryId: string;
  setCategoryId: (v: string) => void;

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
  limit: 10,
  setLimit(v) {
    set({ limit: v });
  },
  offset: 0,
  setOffset(v) {
    set({ offset: v });
  },
}));
