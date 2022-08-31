import React, { useState } from 'react';
import { CircleImage } from '../styles/Image.styled';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../../actions/cartAction';
import {
  ItemContainer,
  ProductName,
  ProductInfo,
  ProductStyle,
  FSiconCheck,
  FSiconX,
  FSiconEdit,
  ContainerInSmallScreen
} from '../styles/Cart.styled';

export default function Item({ item }) {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const updateCart = () => {
    const updatedItem = {
      product_id: item.product_id,
      product_name: item.product_name,
      product_category: item.product_category,
      product_image: item.product_image,
      selected_size: item.selected_size,
      selected_qty: item.selected_qty,
      style_id: item.style_id,
      style_name: item.style_name,
      product_price: item.product_price,
      total_price: item.total_price,
      favorite: true
    };
    dispatch(addItemToCart(updatedItem));
    setEdit(false);
  };
  const removeItem = () => {
    if (confirm(`Are you sure want to delete ${item.product_name}?`) === true) {
      const id = item.style_id;
      dispatch(removeItemFromCart(id));
      setEdit(false);
    }
  };
  return (
    <ItemContainer>
      <ProductName>
        <Link to={`/${item.product_id}`} style={{ textDecoration: 'none' }}>
          <CircleImage src={item.product_image} />
          <br />
          {item.product_name}
        </Link>
      </ProductName>
      <ProductInfo>{item.product_category}</ProductInfo>
      <ProductStyle>{item.style_name}</ProductStyle>
      <ProductInfo>{item.selected_size}</ProductInfo>
      <ProductInfo>{item.selected_qty}</ProductInfo>
      <ProductStyle>
        ${item.product_price} x {item.selected_qty} = $
        {item.product_price * item.selected_qty}
      </ProductStyle>
      <ProductInfo>
        {edit ? (
          <>
            <FSiconCheck
              className="fa-solid fa-check"
              onClick={updateCart}
            ></FSiconCheck>
            <FSiconX className="fa-solid fa-x" onClick={removeItem}></FSiconX>
          </>
        ) : (
          <FSiconEdit
            className="fa-solid fa-pen-to-square"
            onClick={() => setEdit(true)}
          ></FSiconEdit>
        )}
      </ProductInfo>
    </ItemContainer>
  );
}
