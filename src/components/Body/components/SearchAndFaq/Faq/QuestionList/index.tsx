import useGetFaqList from '@/apis/useGetFaqList';
import { Tab } from '@/components/Body';
import { useSearchStore } from '@/store/useSearchStore';

export default function QuestionList({ selectTab }: { selectTab: Tab }) {
  const { categoryId } = useSearchStore();

  useGetFaqList(selectTab);
  return <div>리스트~</div>;
}
