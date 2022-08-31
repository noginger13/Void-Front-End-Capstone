import React from 'react';
import { useSelector } from 'react-redux';
import { CategoryHeader } from '../styles/Category.styled';

export default function Category() {
  const productDetail = useSelector((state) => state.productDetail);
  const { category } = productDetail.productDetail;

  return <CategoryHeader>{category}</CategoryHeader>;
}
