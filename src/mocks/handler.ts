import { http, HttpResponse } from 'msw';
import consultTab from './json/consultTab.json';
import usageTab from './json/usageTab.json';

export const handlers = [
  http.get('/category', ({ request }) => {
    const url = new URL(request.url);
    const tabValue = url.searchParams.get('tab');
    const json = tabValue === 'intro' ? consultTab : usageTab;
    return HttpResponse.json(json, { status: 200 });
  }),
];
