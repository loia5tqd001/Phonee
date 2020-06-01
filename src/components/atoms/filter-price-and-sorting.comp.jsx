import React from 'react';
import Select from 'react-select';

import { useSelector, useDispatch } from 'react-redux';
import { priceFilters, sorting } from '../../redux/product-filter-sorting/data';
import { selectPriceFilter, selectSorting } from '../../redux/product-filter-sorting/selectors';
import { setPriceFilter, setSorting } from '../../redux/product-filter-sorting/actions';

import { selectCustomStyles, Container, Group, Label } from './filter-price-and-sorting.styled';

function FilterPrice() {
  const curPriceFilter = useSelector(selectPriceFilter);
  const selectedSorting = useSelector(selectSorting);
  const dispatch = useDispatch();

  return (
    <Container>
      <Group>
        <Label>Chọn mức giá:</Label>
        <Select
          options={priceFilters}
          styles={selectCustomStyles}
          value={curPriceFilter}
          onChange={(payload) => dispatch(setPriceFilter(payload))}
          isSearchable={false}
        />
      </Group>

      <Group>
        <Label>Sắp xếp theo:</Label>
        <Select
          options={sorting}
          styles={selectCustomStyles}
          value={selectedSorting}
          onChange={(payload) => dispatch(setSorting(payload))}
          isSearchable={false}
        />
      </Group>
    </Container>
  );
}

export default FilterPrice;
