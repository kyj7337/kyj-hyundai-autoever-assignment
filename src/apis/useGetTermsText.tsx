import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PrivacyTextResponse } from './useGetPrivacyText';

const fetcher = async () => {
  return axios.get<PrivacyTextResponse>('/terms').then(({ data }) => data);
};

export default function useGetTermsText(enabled: boolean) {
  return useQuery({
    queryKey: ['/terms'],
    queryFn: fetcher,
    enabled,
  });
}
