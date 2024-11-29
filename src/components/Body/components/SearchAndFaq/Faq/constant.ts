export interface Category {
  label: string;
  categoryId: string;
}

export const introCategory: Category[] = [
  {
    label: '전체',
    categoryId: '',
  },
  {
    label: '서비스 상품',
    categoryId: 'PRODUCT',
  },
  {
    label: '도입 상담',
    categoryId: 'COUNSELING',
  },
  {
    label: '계약',
    categoryId: 'CONTRACT',
  },
];

export const useCategory: Category[] = [
  {
    label: '전체',
    categoryId: '',
  },
  {
    label: '가입문의',
    categoryId: 'SIGN_UP',
  },
  {
    label: '비즈니스(업무용)',
    categoryId: 'BUSINESS',
  },
  {
    label: '사고/보험',
    categoryId: 'ACCIDENT',
  },
  {
    label: '예약/결제',
    categoryId: 'RESERVATION',
  },
  {
    label: '차량문의',
    categoryId: 'VEHICLE',
  },
  {
    label: '충전',
    categoryId: 'REFUEL',
  },
  {
    label: '쿠폰/기타',
    categoryId: 'COUPON',
  },
];
