import React from 'react';
import Item from './Item';
import Summary from './Summary';
import {
  CartContainer,
  CartItemsContainer,
  ProductName,
  ProductInfo,
  ProductStyle,
  HeadContainer
} from '../styles/Cart.styled';

export default function CartItems({ cartItems }) {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.total_price, 0);
  const tax = Number((totalPrice * 0.062).toFixed(2));
  return (
    <>
      {cartItems.length === 0 ? (
        <div>
          <h1>Your cart is empty </h1>
        </div>
      ) : (
        <CartContainer>
          <CartItemsContainer>
            <HeadContainer>
              <ProductName>Product Name</ProductName>
              <ProductInfo>Category</ProductInfo>
              <ProductStyle>Style</ProductStyle>
              <ProductInfo>Size</ProductInfo>
              <ProductInfo>Quantity</ProductInfo>
              <ProductStyle>Price</ProductStyle>
            </HeadContainer>

            {cartItems.map((item) => (
              <Item key={item.style_id} item={item} />
            ))}
          </CartItemsContainer>
          <Summary totalPrice={totalPrice} tax={tax} />
        </CartContainer>
      )}
    </>
  );
}
