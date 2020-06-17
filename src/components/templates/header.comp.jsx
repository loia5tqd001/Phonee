import React, { useState, useCallback } from 'react';
import routes from '../../utils/routes';
import { useSelector } from 'react-redux';
import { selectAmountProductInCart } from '../../redux/cart/selectors';

import SearchSuggestion from '../atoms/search-suggestion.comp';
import { HeaderContainer, Logo, Form, SearchInput, SearchButton, CartIcon } from './header.styled';

function Header() {
  const amountProducts = useSelector(selectAmountProductInCart);
  const [searchKey, setSearchKey] = useState('');
  const clearTextCb = useCallback(() => setSearchKey(''), []);
  const preventCb = useCallback((e) => e.preventDefault(), []);

  return (
    <HeaderContainer>
      <Logo to={routes.home.path} title="Trang chủ">
        Phonee
      </Logo>

      <Form onSubmit={preventCb}>
        <SearchInput
          type="text"
          placeholder="Bạn tìm gì..."
          ariaLabel="Bạn tìm gì..."
          maxLength={40}
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <SearchButton>
          <ion-icon name="search" />
        </SearchButton>
        <SearchSuggestion searchKey={searchKey} clearTextCb={clearTextCb} />
      </Form>

      <CartIcon to={routes.cart.path} title="Giỏ hàng">
        <ion-icon name="cart" />
        <span>({amountProducts})</span>
      </CartIcon>
    </HeaderContainer>
  );
}

export default Header;
