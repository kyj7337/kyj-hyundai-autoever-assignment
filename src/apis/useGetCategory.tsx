import { Tab } from '@/components/Body';
import { Category } from '@/components/Body/components/SearchAndFaq/Faq/CategoryGroup/constant';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetcher = async (tab: Tab) =>
  axios
    .get<Category[]>('/category', {
      params: {
        tab,
      },
    })
    .then(({ data }) => {
      return [{ categoryID: '', name: '전체' }, ...data];
    });

export default function useGetCategory(tab: Tab) {
  return useQuery({
    queryKey: ['category', tab],
    queryFn: () => fetcher(tab),
    staleTime: Infinity,
  });
}
