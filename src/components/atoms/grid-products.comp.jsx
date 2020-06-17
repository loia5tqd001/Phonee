import React from 'react';
import routes from '../../utils/routes';

import { useSelector } from 'react-redux';
import { selectAllProductsInArray, selectIsFetching } from '../../redux/products/selectors';

import { useFilterProducts, useSortingProducts, usePagingProducts } from './grid-products.hooks';
import ProductPreview from './product-preview.comp';
import WithSpinner from './with-spinner.comp';
import { GridContainer, Alert, ViewAll, ViewMore } from './grid-products.styled';

const LoadingSection = WithSpinner(React.Fragment, 500);

function GridProducts() {
  const isFetching = useSelector(selectIsFetching);
  const products = useSelector(selectAllProductsInArray);

  const filteredProducts = useFilterProducts(products);
  const sortedProducts = useSortingProducts(filteredProducts);
  const { presentProducts, noProductsRemain, oneMorePage } = usePagingProducts(sortedProducts);

  return (
    <LoadingSection isLoading={isFetching}>
      {presentProducts.length > 0 ? (
        <>
          <GridContainer>
            {presentProducts.map((product) => (
              <ProductPreview key={product.id} {...product} />
            ))}
          </GridContainer>
          {noProductsRemain !== 0 && (
            <ViewMore onClick={oneMorePage}>
              Xem thêm {noProductsRemain} điện thoại <ion-icon name="caret-down" />
            </ViewMore>
          )}
        </>
      ) : (
        <p>
          <Alert>Không có sản phẩm nào phù hợp !</Alert>
          <ViewAll to={routes.home.path}>Xem tất cả {products.length} điện thoại</ViewAll>
        </p>
      )}
    </LoadingSection>
  );
}

export default GridProducts;
