import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectGuest, selectTotalMoney, selectItems } from '../../redux/cart/selectors';
import { emptyCart } from '../../redux/cart/actions';
import { formatVnd } from '../../utils/helpers';
import routes from '../../utils/routes';

import CartItem from '../atoms/cart-item.comp';
import Modal from '../atoms/modal.comp';
import {
  PageContainer,
  InfoHeading,
  SuccessCheckout,
  Red,
  Blue,
  Hr,
  InfoList,
  NormalLink,
  LinkToHome,
} from './checkout.styled';

function Checkout() {
  const history = useHistory();
  const dispatch = useDispatch();
  const guest = useSelector(selectGuest);
  const cartItems = useSelector(selectItems);
  const totalMoney = useSelector(selectTotalMoney);

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  if (!cartItems.length) {
    history.push(routes.home.path);
  }

  const goBackHomePage = () => {
    setIsConfirmOpen(false);
    setIsAlertOpen(false);
    dispatch(emptyCart());
    history.push(routes.home.path);
  };

  useEffect(() => {
    return () => {
      dispatch(emptyCart());
    };
  }, [dispatch]);

  return (
    <PageContainer>
      {isConfirmOpen && (
        <Modal
          isOpen={isConfirmOpen}
          heading="hủy đơn hàng"
          buttons={[
            { type: 'outline', content: 'Đóng', callback: () => setIsConfirmOpen(false) },
            {
              type: 'contained',
              content: 'Xác nhận hủy',
              callback: () => {
                setIsConfirmOpen(false);
                setIsAlertOpen(true);
              },
            },
          ]}
        >
          Bạn có chắc muốn hủy đơn hàng này?
        </Modal>
      )}
      {isAlertOpen && (
        <Modal
          isOpen={isAlertOpen}
          heading="hủy đơn hàng thành công"
          buttons={[{ type: 'outline', content: 'Đóng', callback: goBackHomePage }]}
          autoClose={{ time: 5, callback: goBackHomePage }}
        >
          Đơn hàng đã được hủy thành công
        </Modal>
      )}

      <SuccessCheckout>
        <ion-icon name="checkmark" /> Đặt hàng thành công
      </SuccessCheckout>

      <p>
        Cảm ơn{' '}
        <b>
          {guest.gender} {guest.name.split(/\s/).pop()}{' '}
        </b>{' '}
        đã cho Phonee cơ hội được phục vụ. Trong 10 phút, nhân viên Phonee sẽ{' '}
        <b>gửi tin nhắn hoặc gọi điện</b> xác nhận giao hàng cho {guest.gender}.
      </p>

      <InfoHeading>Thông tin đặt hàng:</InfoHeading>
      <InfoList>
        <li>
          {' '}
          Người nhận:{' '}
          <b>
            {' '}
            {guest.name}, {guest.phone}{' '}
          </b>{' '}
        </li>
        <li>
          Địa chỉ nhận hàng:{' '}
          <b>
            {guest.street}, {guest.ward?.label}, {guest.district?.label}, {guest.province?.label}
          </b>
        </li>
        <li>
          Tổng tiền:{' '}
          <b>
            <Red> {formatVnd(totalMoney)} </Red>
          </b>
        </li>
      </InfoList>

      <NormalLink onClick={() => setIsConfirmOpen(true)}>Hủy đơn hàng</NormalLink>
      <p>
        Khi cần hỗ trợ vui lòng gọi{' '}
        <b>
          <Blue>1900.0000</Blue>
        </b>
      </p>

      <InfoHeading>Sản phẩm đã mua:</InfoHeading>
      {cartItems.map(({ product, amount }) => (
        <CartItem key={product.id} product={product} amount={amount} fixed />
      ))}

      <Hr />

      <LinkToHome to={routes.home.path}>Về trang chủ</LinkToHome>
    </PageContainer>
  );
}

export default Checkout;
