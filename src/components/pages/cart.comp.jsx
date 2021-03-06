import React from 'react';
import routes from '../../utils/routes';
import { formatVnd } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { selectItemsInCart, selectTotalMoneyInCart } from '../../redux/cart/selectors';

import CartItem from '../atoms/cart-item.comp';
import FormGuestCart from '../atoms/form-guest-cart.comp';
import {
  PageContainer,
  PageHeader,
  HeaderLink,
  CartContainer,
  CartProducts,
  Total,
  EmptyCartContainer,
  ToHomeLink,
} from './cart.styled';

function Cart() {
  const cartItems = useSelector(selectItemsInCart);
  const totalMoney = useSelector(selectTotalMoneyInCart);

  return (
    <PageContainer>
      <PageHeader>
        <HeaderLink to={routes.product.path}>
          <ion-icon name="chevron-back-outline" />
          Mua thêm sản phẩm khác
        </HeaderLink>
        <p>Giỏ hàng của bạn</p>
      </PageHeader>

      {cartItems.length > 0 ? (
        <CartContainer>
          <CartProducts>
            {cartItems.map(({ product, amount }) => (
              <CartItem key={product.id} product={product} amount={amount} />
            ))}

            <Total>
              Tổng tiền: <span>{formatVnd(totalMoney)}</span>
            </Total>
          </CartProducts>

          <FormGuestCart />
        </CartContainer>
      ) : (
        <EmptyCartContainer>
          Không có sản phầm nào trong giỏ hàng
          <ToHomeLink to={routes.home.path}>Về trang chủ</ToHomeLink>
        </EmptyCartContainer>
      )}
    </PageContainer>
  );
}

export default Cart;
