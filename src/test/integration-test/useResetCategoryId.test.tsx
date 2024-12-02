import { describe, it } from 'vitest';
import { useSearchStore } from '@/store/useSearchStore';
import { renderHook } from '@testing-library/react';

describe('useResetCategoryId 테스트', () => {
  it('실행되기 전 다른 값 세팅', () => {
    const { result: searchStoreResult } = renderHook(() => useSearchStore());
    const { categoryId } = searchStoreResult.current;
  });
});
