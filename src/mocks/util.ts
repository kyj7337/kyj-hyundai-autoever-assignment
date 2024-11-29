export function searchMatchJsonList(
  jsonList: any[],
  options: {
    limit: number;
    offset: number;
    faqCategoryID: string | null;
  }
) {
  const { faqCategoryID, limit, offset } = options;
  const targetSubCategoryName = !!faqCategoryID && CategoryIdKeyMapper[faqCategoryID];
  // * 어떤 서브 카테고리를 선택했는지 필터한다.

  const categorizedList = jsonList.filter((item) => {
    if (targetSubCategoryName) return item.categoryName === targetSubCategoryName;
    else return item;
  });

  const filteredList = categorizedList.filter((item, idx) => {
    if (idx >= offset && idx < limit) {
      return item;
    }
  });
  const totalRecord = categorizedList.length;
  const nextOffset = totalRecord - (limit + offset) >= 10 ? 10 : totalRecord - (limit + offset);
  // console.log('필터후 결과: ', filteredList);
  return { list: filteredList, totalRecord, nextOffset };
}

interface ObjSelect {
  [key: string]: string;
}

export const CategoryIdKeyMapper: ObjSelect = {
  // * 서비스 도입
  PRODUCT: '서비스 상품',
  COUNSELING: '도입 상담',
  CONTRACT: '계약',
  // * 서비스 이용
  SIGN_UP: '가입문의',
  BUSINESS: '비즈니스(업무용)',
  ACCIDENT: '사고/보험',
  RESERVATION: '예약/결제',
  VEHICLE: '차량문의',
  REFUEL: '충전',
  COUPON: '쿠폰/기타',
};
