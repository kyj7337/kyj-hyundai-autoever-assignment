import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import axios from 'axios';
interface FaqListFetcherArgs {
  limit: number;
  offset: number;
  categoryId: string;
  tab: Tab;
}

export interface FaqResponse {
  items: ItemsEntity[];
  pageInfo: PageInfo;
}
export interface ItemsEntity {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}
export interface PageInfo {
  limit: number;
  nextOffset: number;
  totalRecord: number;
}

const fetcher = async (args: FaqListFetcherArgs) => {
  const { categoryId, limit, offset, tab } = args;
  return axios
    .get<FaqResponse>('/faq', {
      params: {
        limit,
        offset,
        tab,
        faqCategoryID: categoryId,
      },
    })
    .then(({ data }) => {
      return data;
    });
};

export default function useGetFaqList(tab: Tab) {
  const { limit, offset, categoryId } = useSearchStore();

  return useQuery({
    queryKey: ['/faq', categoryId, tab],
    queryFn: () => fetcher({ limit, offset, tab, categoryId }),
    staleTime: Infinity,
  });
}
