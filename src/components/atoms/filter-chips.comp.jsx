import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { priceFilters } from '../../redux/product-filter-sorting/data';
import {
  selectPriceFilter,
  selectBrandsFiltered,
} from '../../redux/product-filter-sorting/selectors';
import {
  toggleBrand,
  setPriceFilter,
  removeAllFilters,
} from '../../redux/product-filter-sorting/actions';
import { brandProps } from '../../utils/prop-types';
import WithSpinner from './with-spinner.comp';
import { Chip } from './filter-chips.styled';

function FilterChips({ brands }) {
  const brandsToFilter = useSelector(selectBrandsFiltered);
  const priceFilter = useSelector(selectPriceFilter);
  const dispatch = useDispatch();

  const hasFilterBrand = brandsToFilter.length > 0;
  const hasFilterPrice = priceFilter !== priceFilters[0];

  return (
    <div>
      {Object.values(brands).map(
        (brand) =>
          brandsToFilter.includes(brand) && (
            <Chip key={brand.id} onClick={() => dispatch(toggleBrand(brand))}>
              {brand.name}
            </Chip>
          ),
      )}

      {hasFilterPrice && (
        <Chip onClick={() => dispatch(setPriceFilter(priceFilters[0]))}>{priceFilter.label}</Chip>
      )}

      {(hasFilterBrand || hasFilterPrice) && (
        <Chip deleteAll onClick={() => dispatch(removeAllFilters())}>
          Xóa tất cả
        </Chip>
      )}
    </div>
  );
}

FilterChips.propTypes = {
  brands: PropTypes.objectOf(PropTypes.shape(brandProps)).isRequired,
};

export default WithSpinner(FilterChips);
