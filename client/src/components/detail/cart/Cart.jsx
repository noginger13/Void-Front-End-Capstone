import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container } from '../styles/Container.styled';
import CartItems from './CartItems';

export default function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  return (
    <>
      <Container style={{ minWidth: '400px' }}>
        <button onClick={() => navigate(-1)}>Go Back</button>
        <h1>My Shopping Cart</h1>
        <CartItems cartItems={cartItems} />
      </Container>
    </>
  );
}
