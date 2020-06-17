import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeAllFilters, resetSorting } from './actions';

export const useResetFilterSortingOnMount = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeAllFilters());
    dispatch(resetSorting());
  }, [dispatch]);
};
