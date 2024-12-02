import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export interface FaqListFetcherArgs {
  limit: number;
  offset: number;
  categoryId: string;
  tab: Tab;
  searchString?: string;
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
interface Params {
  limit: number;
  offset: number;
  faqCategoryID: string;
  tab: Tab;
  question?: string;
}

const fetcher = async (args: FaqListFetcherArgs) => {
  const { categoryId, limit, offset, tab, searchString } = args;
  const questionExist = !!searchString;
  const params: Params = {
    limit,
    offset,
    tab,
    faqCategoryID: categoryId,
    //  question: '가입'
  };
  if (questionExist) {
    params.question = searchString;
  }

  return axios
    .get<FaqResponse>('/faq', {
      params,
    })
    .then(({ data }) => {
      return data;
    });
};
/** FAQ 내용 GET */
export default function useGetFaqList(tab: Tab) {
  const { limit, offset, categoryId, searchAction, searchString } = useSearchStore();

  return useQuery({
    queryKey: ['/faq', categoryId, tab, offset, searchAction],
    queryFn: () => fetcher({ limit, offset, tab, categoryId, searchString }),
    staleTime: Infinity,
  });
}
