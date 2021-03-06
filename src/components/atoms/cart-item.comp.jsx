import React from 'react';
import PropTypes from 'prop-types';
import { productProps } from '../../utils/prop-types';
import { useDispatch } from 'react-redux';
import { formatVnd } from '../../utils/helpers';
import { addProduct, takeout1Product, removeProduct } from '../../redux/cart/actions';

import Counter from './counter.comp';
import {
  ProductItem,
  ProductImage,
  ProductName,
  ProductPrice,
  RemoveItem,
  ImageFrame,
} from './cart-item.styled';

function CartItem({ product, amount, fixed }) {
  const dispatch = useDispatch();

  return (
    <ProductItem>
      <ProductImage>
        {!fixed && (
          <RemoveItem onClick={() => dispatch(removeProduct(product))}>
            <ion-icon name="close-circle-outline" /> Xóa
          </RemoveItem>
        )}

        <ImageFrame fixed={fixed}>
          <img src={product.image} alt={product.name} />
        </ImageFrame>
      </ProductImage>

      <ProductName>{product.name}</ProductName>

      <ProductPrice>{formatVnd(product.price)}</ProductPrice>

      {fixed ? (
        <p>
          Số lượng: <b>{amount}</b>
        </p>
      ) : (
        <Counter
          value={amount}
          min={1}
          onIncrement={() => dispatch(addProduct(product))}
          onDecrement={() => dispatch(takeout1Product(product))}
        />
      )}
    </ProductItem>
  );
}

CartItem.propTypes = {
  amount: PropTypes.number.isRequired,
  product: PropTypes.shape(productProps),
  fixed: PropTypes.bool.isRequired,
};

CartItem.defaultProps = {
  fixed: false,
};

export default CartItem;
