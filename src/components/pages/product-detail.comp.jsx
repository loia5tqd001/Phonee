import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { formatVnd } from '../../utils/helpers';
import routes from '../../utils/routes';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/cart/actions';

import { getProductById } from '../../firebase/utils';
import { useGetFirebase } from '../../firebase/hooks';

import WithSpinner from '../atoms/with-spinner.comp';
import productSpec from './product-detail.data';
import {
  PageContainer,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductName,
  SpecHeading,
  SpecList,
  SpecItem,
  SpecName,
  PriceWrapper,
  Price,
  CrossPrice,
  BuyButton,
} from './product-detail.styled';

const WithSpinnerContainer = WithSpinner(PageContainer, 500);

function ProductDetail() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { isLoading, data: product } = useGetFirebase({}, getProductById, productId);

  const history = useHistory();
  if (!isLoading && !product) {
    history.push(''); // navigate to products page when there's no product found
    return null;
  }

  return (
    <WithSpinnerContainer isLoading={isLoading}>
      <ProductName>{product.name}</ProductName>

      <ProductDetails>
        <ProductImage>
          <img src={product.image} alt={product.name} />
        </ProductImage>

        <ProductInfo>
          <PriceWrapper>
            <Price>{product.price ? formatVnd(product.price) : 'Hàng sắp về'}</Price>
            {product.crossPrice && <CrossPrice>{formatVnd(product.crossPrice)}</CrossPrice>}
          </PriceWrapper>

          <SpecHeading>Thông số kỹ thuật</SpecHeading>
          <SpecList>
            {productSpec.map((spec) => (
              <SpecItem key={spec.name}>
                <SpecName>{spec.name}: </SpecName>
                <span>{spec.value}</span>
              </SpecItem>
            ))}
          </SpecList>

          <BuyButton to={routes.cart.path} onClick={() => dispatch(addProduct(product))}>
            Mua ngay
          </BuyButton>
        </ProductInfo>
      </ProductDetails>
    </WithSpinnerContainer>
  );
}

export default ProductDetail;
