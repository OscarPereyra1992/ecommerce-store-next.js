import useSWR from 'swr';
import getCategories from '@/actions/get-categories';

const useFetchCategories = () => {
  const { data, error } = useSWR('categories', getCategories);

  if (error) {
    return null;
  }

  return data;
};

export default useFetchCategories;