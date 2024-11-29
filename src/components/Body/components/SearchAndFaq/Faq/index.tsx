import { Tab } from '@/components/Body';
import './index.scss';
import { Category, introCategory, useCategory } from './constant';
import useResetCategoryId from './hooks/useResetCategoryId';
import { useSearchStore } from '@/store/useSearchStore';

interface FaqProps {
  selectTab: Tab;
}

interface CategoryInfo extends Category {
  isActive: boolean;
}

export default function Faq(props: FaqProps) {
  const { selectTab } = props;
  const { categoryId, setCategoryId } = useSearchStore();
  useResetCategoryId(selectTab);

  const targetCategory = selectTab === 'intro' ? introCategory : useCategory;
  const modifiedCategory: CategoryInfo[] = targetCategory.map((category) => ({
    ...category,
    isActive: categoryId === category.categoryId,
  }));

  return (
    <div className='category-container'>
      {modifiedCategory.map((category) => {
        const { categoryId, isActive, label } = category;
        const onClickCategory = () => setCategoryId(categoryId);
        return (
          <div onClick={onClickCategory} className={`category-item ${isActive ? 'checked' : ''}`} key={categoryId}>
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
