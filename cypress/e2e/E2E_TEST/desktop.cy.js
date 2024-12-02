describe('데스크탑 접속', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('1. 헤더항목 확인', () => {
    const headerItems = ['서비스 소개', '자주 묻는 질문', '새소식', '상담문의'];
    cy.get('.header-item-container')
      .children('ul')
      .children('li')
      .children('a')
      .each((elem, idx) => {
        if (headerItems[idx] !== elem.text()) throw new Error('메뉴 순서 불일치');
      });
  });
  it('2. 바디 항목 확인', () => {
    cy.get('.body-container')
      .children('.content')
      .children('.page-title')
      .should('have.text', '자주 묻는 질문궁금하신 내용을 빠르게 찾아보세요.');
  });
  it('2-1. 탭 텍스트 확인', () => {
    const tabs = ['서비스 도입', '서비스 이용'];
    cy.get('.tabs-container')
      .children('li')
      .each((elem, idx) => {
        if (tabs[idx] !== elem.text()) throw new Error('탭 텍스트 불일치');
      });
  });
  it('2-2. 탭 활성화 확인', () => {
    cy.get('.tabs-container').children('li').first().should('have.class', 'active');
    cy.get('.tabs-container').children('li').last().should('not.have.class', 'active');
  });
  it('2-4. 검색어 입력 및 검색 요청 후 개수 확인', () => {
    // * 기본값 확인
    cy.get('.faq-container').children('.faq-list').should('not.have.length', 2); // * 2개가 아니여야 함.
    cy.get('.input-wrapper').children('input').type('도입{enter}');
    cy.wait(1000);
    cy.get('.faq-container').children('.faq-list').should('have.length', 2); // * 2개가 여야 함.
  });
  it('2-5. 서비스 문의 확인', () => {
    const text = [
      { txt: '상품제안서 다운로드', href: '/product_proposal.pdf' },
      { txt: '상담문의 등록하기', href: 'https://wiblebiz.kia.com/Counsel' },
      { txt: '카톡으로 문의하기', href: 'https://pf.kakao.com/_xfLxjdb' },
    ];
    cy.get('.inquiry-box')
      .children('a')
      .should('have.length', 3)
      .each((elem, idx) => {
        if (text[idx].txt !== elem.children('.desc-txt').children('.desc').text())
          throw new Error('서비스 문의 아이템 텍스트 이상');
      })
      .each((elem, idx) => {
        cy.get(elem).should('have.attr', 'href', text[idx].href);
      });
  });
  it('2-6. 이용 프로세스 안내', () => {
    cy.get('.process-container').children('h2').should('have.text', '이용 프로세스 안내');
    const process = ['1. 문의 등록', '2. 관리자 설정', '3. 임직원 가입', '4. 서비스 이용'];
    cy.get('.process-container')
      .children('.process-box')
      .children()
      .each((elem, idx) => {
        cy.get(elem).children('.title').should('have.text', process[idx]);
      });
  });
  it('2-7. 앱스토어 배너', () => {
    cy.get('.app-banner-container').children('h2').should('have.text', '위블 비즈 App 지금 만나보세요!');
    const appUrls = [
      'https://play.google.com/store/apps/details?id=kor.mop.user.app',
      'https://apps.apple.com/kr/app/%EC%9C%84%EB%B8%94-%EB%B9%84%EC%A6%88/id1598065794',
    ];
    cy.get('.store-container')
      .children('a')
      .each((elem, idx) => {
        cy.get(elem).should('have.attr', 'href', appUrls[idx]);
      });
  });
  it('3. 푸터 정보 확인', () => {
    const footerInfos = [
      '서울특별시 서초구 헌릉로 12',
      '기아㈜',
      '대표: 송호성, 최준영',
      '사업자등록번호: 119-81-02316',
      '통신판매번호: 2006-07935',
      '고객센터: 1833-4964',
      '제휴문의: wible.biz@kia.com',
    ];
    cy.get('.address-infos')
      .children('span')
      .each((elem, idx) => {
        cy.get(elem).should('have.text', footerInfos[idx]);
      });
  });
});
