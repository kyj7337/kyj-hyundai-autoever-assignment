import { http, HttpResponse } from 'msw';
import consultTab from './json/consultTab.json';
import usageTab from './json/usageTab.json';
import consultList from './json/consultList.json';
import usageList from './json/usageList.json';
import privacy from './json/privacy.json';
import terms from './json/terms.json';
import { searchMatchJsonList } from './util';

export const handlers = [
  http.get('/category', ({ request }) => {
    const url = new URL(request.url);
    const tabValue = url.searchParams.get('tab');
    const json = tabValue === 'intro' ? consultTab : usageTab;
    return HttpResponse.json(json, { status: 200 });
  }),
  http.get('/faq', ({ request }) => {
    const url = new URL(request.url);
    const limit = url.searchParams.get('limit');
    const offset = url.searchParams.get('offset');
    const tab = url.searchParams.get('tab');
    const faqCategoryID = url.searchParams.get('faqCategoryID');
    const question = url.searchParams.get('question');

    const targetJson = tab === 'intro' ? consultList : usageList;
    const { list, nextOffset, totalRecord } = searchMatchJsonList(targetJson, {
      limit: Number(limit),
      offset: Number(offset),
      faqCategoryID,
      question,
    });

    const result = {
      items: list,
      pageInfo: {
        limit: Number(limit),
        nextOffset,
        totalRecord,
      },
    };
    return HttpResponse.json(result, { status: 200 });
  }),
  http.get('/privacy', () => {
    return HttpResponse.json(privacy, { status: 200 });
  }),
  http.get('/terms', () => {
    return HttpResponse.json(terms, { status: 200 });
  }),
];
