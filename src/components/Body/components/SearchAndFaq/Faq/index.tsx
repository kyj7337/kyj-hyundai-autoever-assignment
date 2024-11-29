import { Tab } from '@/components/Body';
import CategoryGroup from './CategoryGroup';
import QuestionList from './QuestionList';

export default function Faq({ selectTab }: { selectTab: Tab }) {
  return (
    <div>
      <CategoryGroup selectTab={selectTab} />
      <QuestionList />
    </div>
  );
}
