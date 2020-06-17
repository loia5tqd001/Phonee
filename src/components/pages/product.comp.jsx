import React from 'react';
import { useResetFilterSortingOnMount } from '../../redux/product-filter-sorting/hooks';
import { getAllBrands } from '../../firebase/utils';
import { useGetFirebase } from '../../firebase/hooks';

import GridProducts from '../atoms/grid-products.comp';
import FilterBrands from '../atoms/filter-brands.comp';
import FilterPriceAndSorting from '../atoms/filter-price-and-sorting.comp';
import FilterChips from '../atoms/filter-chips.comp';

import { PageContainer } from './product.styled';

function Product() {
  useResetFilterSortingOnMount();
  const { isLoading: isBrandsLoading, data: brands } = useGetFirebase({}, getAllBrands);

  return (
    <PageContainer>
      <FilterBrands isLoading={isBrandsLoading} brands={brands} />
      <FilterPriceAndSorting />
      <FilterChips isLoading={isBrandsLoading} brands={brands} />
      <GridProducts />
    </PageContainer>
  );
}

export default Product;
