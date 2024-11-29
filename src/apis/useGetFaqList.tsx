import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
interface FaqListFetcherArgs {
  limit: number;
  offset: number;
  categoryId: string;
  tab: Tab;
}

const fetcher = (args: FaqListFetcherArgs) => {
  const { categoryId, limit, offset, tab } = args;
  return axios
    .get('/faq', {
      params: {
        limit,
        offset,
        tab,
        faqCategoryID: categoryId,
      },
    })
    .then(({ data }) => data);
};

export default function useGetFaqList(tab: Tab) {
  const { limit, offset, categoryId } = useSearchStore();
  return useQuery({
    queryKey: ['/faq'],
    queryFn: () => fetcher({ limit, offset, tab, categoryId }),
  });
}
