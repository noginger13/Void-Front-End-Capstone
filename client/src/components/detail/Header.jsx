import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import {
  HeaderContainer,
  LogoContainer,
  Logo,
  SearchInput,
  SearchIcon,
  CartIcon,
  ToggleIcon
} from './styles/Header.styled';

export default function Header({ globalThemeHandler }) {
  const [globalTheme, setGlobalTheme] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const onClickHandler = () => {
    setGlobalTheme(!globalTheme);
    globalThemeHandler();
  };
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo"></Logo>
      </LogoContainer>
      <SearchInput
        type="text"
        value={keyWord}
        onChange={(e) => setKeyWord(e.target.value)}
      ></SearchInput>
      <label style={{ border: 'none' }}>
        <SearchIcon
          className="fa-solid fa-magnifying-glass"
          as={Link}
          to={`/${keyWord}`}
        ></SearchIcon>
      </label>
      <CartIcon
        as={Link}
        to="/mycart"
        className="fa-solid fa-cart-shopping"
        style={{ color: 'black' }}
        title="My shopping cart"
      ></CartIcon>
      {globalTheme ? (
        <ToggleIcon
          className="fa-solid fa-toggle-on"
          onClick={onClickHandler}
        />
      ) : (
        <ToggleIcon
          className="fa-solid fa-toggle-off"
          onClick={onClickHandler}
        />
      )}
    </HeaderContainer>
  );
}
