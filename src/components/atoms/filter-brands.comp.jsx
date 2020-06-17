import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { selectBrandsFiltered } from '../../redux/product-filter-sorting/selectors';
import { toggleBrand } from '../../redux/product-filter-sorting/actions';
import { brandProps } from '../../utils/prop-types';

import WithSpinner from './with-spinner.comp';
import { Container, ImageContainer } from './filter-brands.styled';

function FilterBrands({ brands }) {
  const brandsToFilter = useSelector(selectBrandsFiltered);
  const dispatch = useDispatch();

  return (
    <Container>
      {Object.values(brands).map((brand) => (
        <ImageContainer
          key={brand.id}
          title={brand.name}
          isChecked={brandsToFilter.includes(brand)}
          onClick={() => dispatch(toggleBrand(brand))}
        >
          <img src={brand.image} alt={brand.name} />
        </ImageContainer>
      ))}
    </Container>
  );
}

FilterBrands.propTypes = {
  brands: PropTypes.objectOf(PropTypes.shape(brandProps)).isRequired,
};

export default WithSpinner(FilterBrands, 70);
