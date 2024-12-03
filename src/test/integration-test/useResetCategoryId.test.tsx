import { describe, expect, it } from 'vitest';
import { useSearchStore } from '@/store/useSearchStore';
import { renderHook } from '@testing-library/react';
import useResetCategoryId from '@/components/Body/components/SearchAndFaq/Faq/hooks/useResetCategoryId';

describe('useResetCategoryId 테스트', () => {
  it('실행되기 전 다른 값 세팅 후 useResetCategoryId 실행', () => {
    const { result: searchStoreResult } = renderHook(() => useSearchStore());
    const { categoryId, setCategoryId } = searchStoreResult.current;
    // * 1. 초기값확인
    expect(categoryId).toBe('');
    // * 2. 임의의 값 설정
    setCategoryId('임시값 설정');
    const { result: searchStoreResult2 } = renderHook(() => useSearchStore());
    const { categoryId: categoryId2 } = searchStoreResult2.current;
    // * 3. 임의의값 확인
    expect(categoryId2).toBe('임시값 설정');
    // * 4. 커스텀 훅 실행
    renderHook(() => useResetCategoryId('intro'));
    const { result: searchStoreResult3 } = renderHook(() => useSearchStore());
    const { categoryId: categoryId3 } = searchStoreResult3.current;
    // * 5. 값 초기화 확인
    expect(categoryId3).toBe('');
  });
});
