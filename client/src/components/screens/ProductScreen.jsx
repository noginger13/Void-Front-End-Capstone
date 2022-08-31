import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Detail from '../detail/Detail';
import Questions from '../question/Questions';
import Rating from '../rating/Rating';
import { Container } from '../detail/styles/Container.styled';
import RelatedProducts from '../relatedProducts/RelatedProducts';
import getProductDetail from '../../actions/productDetailAction';
import getProductStyle from '../../actions/productStyleAction';
import getProductMetaData from '../../actions/productMetaDataAction';
import { getProductReviews } from '../../actions/productReviewsAction';
import getRelatedProducts from '../../actions/relatedProductsAction';
import axios from 'axios';

export default function ProductScreen({ globalTheme }) {
  // 37311 - First product ID in the API
  let { id } = useParams();
  id = id >= 37311 ? id : 37311;
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const productStyle = useSelector((state) => state.productStyle);
  const productMetaData = useSelector((state) => state.productMetaData);
  const productReviews = useSelector((state) => state.productReviews);
  const relatedProducts = useSelector((state) => state.relatedProducts);

  //Theme
  const light = {
    backgroundColor: 'white',
    color: 'black'
  };

  const dark = {
    paddingTop: '1px',
    backgroundColor: '#444a44',
    color: 'white'
  };

  const { loading } = productDetail;
  const { loading: styleLoading } = productStyle;
  const { loading: metaDataLoading } = productMetaData;
  const { loading: relatedProductsLoading } = relatedProducts;
  const { loading: reviewsLoading } = productReviews;
  useEffect(() => {
    dispatch(getProductDetail(id));
    dispatch(getProductStyle(id));
    dispatch(getProductMetaData(id));
    dispatch(getProductReviews(id));
    dispatch(getRelatedProducts(id));
  }, [id, dispatch]);
  return (
    <div style={!globalTheme ? light : dark}>
      <Container>
        {loading === false &&
          styleLoading === false &&
          relatedProductsLoading === false &&
          metaDataLoading === false &&
          reviewsLoading === false && (
            <>
              <Detail />
              <RelatedProducts />
              <Questions />
              <Rating />
            </>
          )}
      </Container>
    </div>
  );
}
