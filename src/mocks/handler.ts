import { http, HttpResponse } from 'msw';
import consultTab from './json/consultTab.json';
import usageTab from './json/usageTab.json';
import consultList from './json/consultList.json';
import usageList from './json/usageList.json';

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
    const result = {
      items: [],
      pageInfo: {},
    };
    return HttpResponse.json(result, { status: 200 });
  }),
];
