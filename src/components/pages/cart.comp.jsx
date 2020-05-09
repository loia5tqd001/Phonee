import React from 'react';
import routes from '../../utils/routes';
import { formatVnd } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { selectItems, selectTotalMoney } from '../../redux/cart/selectors';

import CartItem from '../atoms/cart-item.comp';
import {
  PageContainer,
  PageHeader,
  HeaderLink,
  CartContainer,
  CartProducts,
  Total,
  PayButton,
  MarginAuto,
} from './cart.styled';

function Cart() {
  const cartItems = useSelector(selectItems);
  const totalMoney = useSelector(selectTotalMoney);

  return (
    <PageContainer>
      <PageHeader>
        <HeaderLink to={routes.product.path}>
          <ion-icon name="chevron-back-outline" />
          Mua thêm sản phẩm khác
        </HeaderLink>
        <p>Giỏ hàng của bạn</p>
      </PageHeader>

      <CartContainer>
        <CartProducts>
          {cartItems.map(({ product, amount }) => (
            <CartItem key={product.id} product={product} amount={amount} />
          ))}

          <Total>
            Tổng tiền: <span>{formatVnd(totalMoney)}</span>
          </Total>
        </CartProducts>

        <PayButton to={routes.home.path}>Đặt hàng</PayButton>
        <MarginAuto>Bạn có thể chọn hình thức thanh toán sau khi đặt hàng</MarginAuto>
      </CartContainer>
    </PageContainer>
  );
}

export default Cart;
