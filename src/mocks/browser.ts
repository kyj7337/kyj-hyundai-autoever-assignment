import { setupWorker } from 'msw/browser';
import { handlers } from './handler';
// TODO: 핸들러 작업하기
export const worker = setupWorker(...handlers);
