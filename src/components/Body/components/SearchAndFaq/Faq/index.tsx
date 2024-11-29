import { Tab } from '@/components/Body';
import './index.scss';
import { Category, introCategory, useCategory } from './constant';
import { useState } from 'react';
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
  console.log(modifiedCategory);

  return <div className='category-container'></div>;
}
