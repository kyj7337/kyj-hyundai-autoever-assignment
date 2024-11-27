import { http, HttpResponse } from 'msw';
export const handlers = [
  http.get('/', () => {
    return HttpResponse.json({ test: 'ABC' }, { status: 200 });
  }),
];
