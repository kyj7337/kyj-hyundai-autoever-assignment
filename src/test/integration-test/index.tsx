import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement } from 'react';

export const hookWrapper = () => {
  return ({ children }: { children: ReactElement }) => {
    return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
  };
};
