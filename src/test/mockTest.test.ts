import { searchMatchJsonList } from '@/mocks/util';
import UsageList from '@/mocks/json/usageList.json';
import ConsultList from '@/mocks/json/consultList.json';

import { describe, expect, test } from 'vitest';
describe('/faq API의 응답 유틸 테스트 (searchMatchJsonList)', () => {
  test('서비스 도입 탭에서 "무엇" 키워드 검색', () => {
    const { list, totalRecord } = searchMatchJsonList(ConsultList, {
      limit: 10,
      offset: 0,
      faqCategoryID: '',
      question: '무엇',
    });
    expect(totalRecord).toBe(1);
    expect(list.length).toBe(1);
    list.forEach((item) => {
      /** 제목에 "무엇" 키워드 존재 확인 */
      expect(item.question.includes('무엇')).toBe(true);
    });
  });

  test('서비스 도입 탭에서 "비즈니스" 키워드 검색', () => {
    const { list, totalRecord } = searchMatchJsonList(ConsultList, {
      limit: 10,
      offset: 0,
      faqCategoryID: '',
      question: '비즈니스',
    });
    expect(totalRecord).toBe(3);
    expect(list.length).toBe(3);
    list.forEach((item) => {
      expect(item.question.includes('비즈니스')).toBe(true);
    });
  });

  test('서비스 이용 탭 에서 "사고/보험" 탭을 선택했을 때 기본 응답값 확인', () => {
    const { list, totalRecord } = searchMatchJsonList(UsageList, {
      limit: 10,
      offset: 0,
      faqCategoryID: 'ACCIDENT',
      question: '',
    });

    expect(totalRecord).toBe(9);
    expect(list.length).toBe(9);
  });
  test('서비스 이용 탭에서 "차량문의" 탭에서 더보기를 클릭했을 때 응답값 확인', () => {
    const { list, totalRecord, nextOffset } = searchMatchJsonList(UsageList, {
      limit: 10,
      offset: 10,
      faqCategoryID: 'VEHICLE',
      question: '',
    });

    expect(list.length).toBe(10);
    expect(nextOffset).toBe(8);
    expect(totalRecord).toBe(28);
  });
});
