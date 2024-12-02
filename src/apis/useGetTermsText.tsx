import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PrivacyTextResponse } from './useGetPrivacyText';

const fetcher = async () => {
  return axios.get<PrivacyTextResponse>('/terms').then(({ data }) => data);
};
/** 이용약관 HTML 가져오기 */
export default function useGetTermsText(enabled: boolean) {
  return useQuery({
    queryKey: ['/terms'],
    queryFn: fetcher,
    enabled,
  });
}
