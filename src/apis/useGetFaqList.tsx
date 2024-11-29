import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
interface FaqListFetcherArgs {
  limit: number;
  offset: number;
  categoryId: string;
  tab: Tab;
  // searchString: string;
  // setSearchAction: (v: boolean) => void;
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
  const {
    categoryId,
    limit,
    offset,
    tab,
    // searchString, setSearchAction
  } = args;
  // const questionExist = !!searchString;
  const params: Params = { limit, offset, tab, faqCategoryID: categoryId };
  // if (questionExist) {
  //   params.question = searchString;
  // }

  return axios
    .get<FaqResponse>('/faq', {
      params,
    })
    .then(({ data }) => {
      // setSearchAction(false);
      return data;
    });
};

export default function useGetFaqList(tab: Tab) {
  const { limit, offset, categoryId } = useSearchStore();

  return useQuery({
    queryKey: ['/faq', categoryId, tab, offset],
    queryFn: () => fetcher({ limit, offset, tab, categoryId }),
    /** 검색어가 있을 경우는 searchAction 이 활성화 되어 있어야 GET 요청한다. */
    staleTime: Infinity,
  });
}
