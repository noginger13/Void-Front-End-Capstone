import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useSelector } from 'react-redux';
import { GoToReviewContainer } from '../styles/Stars.styled';

export default function GoToReview() {
  const productMetaData = useSelector((state) => state.productMetaData);
  const { ratings } = productMetaData.productMetaData;
  let totalReviews = 0;
  for (let key in ratings) {
    totalReviews += Number(ratings[key]);
  }

  return (
    <GoToReviewContainer>
      {totalReviews !== 0 && (
        <Link to="#rating" data-testid="link-to-rating">
          Read all {totalReviews} reviews
        </Link>
      )}
    </GoToReviewContainer>
  );
}
