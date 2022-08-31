import React from 'react';
import { useSelector } from 'react-redux';
import { TitleHeader } from '../styles/Category.styled';
export default function Title() {
  const productDetail = useSelector((state) => state.productDetail);
  const { name } = productDetail.productDetail;

  return (
    <>
      <TitleHeader>{name}</TitleHeader>
    </>
  );
}
