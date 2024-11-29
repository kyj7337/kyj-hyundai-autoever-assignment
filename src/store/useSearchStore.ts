import { create } from 'zustand';

interface SearchStore {
  searchString: string;
  setSearchString: (v: string) => void;
  categoryId: string;
  setCategoryId: (v: string) => void;
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
}));
