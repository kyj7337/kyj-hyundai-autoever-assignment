import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface PrivacyTextResponse {
  /** HTML 스트링 */
  content: string;
}

const fetcher = async () => {
  return axios.get<PrivacyTextResponse>('/privacy').then(({ data }) => data);
};

export default function useGetPrivacyText(enabled: boolean) {
  return useQuery({
    queryKey: ['/privacy'],
    queryFn: fetcher,
    enabled,
  });
}
