import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeAllFilters, resetSorting } from '../../redux/product-filter-sorting/actions';

import GridProducts from '../atoms/grid-products.comp';
import FilterBrands from '../atoms/filter-brands.comp';
import FilterPriceAndSorting from '../atoms/filter-price-and-sorting.comp';
import FilterChips from '../atoms/filter-chips.comp';

import { PageContainer } from './product.styled';

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeAllFilters());
    dispatch(resetSorting());
  }, [dispatch]);

  return (
    <PageContainer>
      <FilterBrands />
      <FilterPriceAndSorting />
      <FilterChips />
      <GridProducts />
    </PageContainer>
  );
}

export default Product;
