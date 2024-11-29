import { Tab } from '@/components/Body';
import './index.scss';
import { Category } from './constant';
import useResetCategoryId from '../hooks/useResetCategoryId';
import { useSearchStore } from '@/store/useSearchStore';
import useGetCategory from '@/apis/useGetCategory';

interface CategoryGroupProps {
  selectTab: Tab;
}

interface CategoryInfo extends Category {
  isActive: boolean;
}

export default function CategoryGroup(props: CategoryGroupProps) {
  const { selectTab } = props;
  const { categoryId, setCategoryId } = useSearchStore();
  const { data } = useGetCategory(selectTab);

  useResetCategoryId(selectTab);

  const modifiedCategory: CategoryInfo[] =
    data?.map((category) => ({
      ...category,
      isActive: categoryId === category.categoryID,
    })) || [];

  return (
    <div className='category-container'>
      {modifiedCategory?.map((category) => {
        const { categoryID, isActive, name } = category;
        const onClickCategory = () => setCategoryId(categoryID);
        return (
          <div onClick={onClickCategory} className={`category-item ${isActive ? 'checked' : ''}`} key={categoryID}>
            <span>{name}</span>
          </div>
        );
      })}
    </div>
  );
}
