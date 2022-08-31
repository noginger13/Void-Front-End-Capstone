import React, { useState } from 'react';
import { useSelector } from 'react-redux';

//Components
import Stars from '../../detail/Stars';

//Styles
import {
  StarContainer,
  StarLeft,
  StarMiddle,
  StarBar,
  StarFill,
  StarRight
} from '../styles/RatingBreakdown.styled';
import {
  RatingBreakdownContainer,
  TableContainer
} from '../styles/FlexContainers.styled';

//Helper Functions
import averageNumber from '../helpers/averageNumber';
import percentRec from '../helpers/percentRec';
import starCounter from '../helpers/starCounter';
import totalReviews from '../helpers/totalReviews';

export default function RatingBreakdown({ filters, setFilters, clickTracker }) {
  const { productMetaData } = useSelector((state) => state.productMetaData);
  const percent = percentRec(productMetaData.recommended);
  const reviews = totalReviews(productMetaData.ratings);

  let percentMessage;
  if (reviews !== 0 && percent >= 0) {
    percentMessage = (
      <p>
        {percent}% of {reviews} reviews recommend this product
      </p>
    );
  } else {
    percentMessage = <p>There are no reviews for this product yet</p>;
  }

  let clearFilters;
  if (filters.length > 0) {
    clearFilters = (
      <p
        onClick={() => {
          setFilters([]);
        }}
      >
        <u className="toggle">Clear All Filters</u>
      </p>
    );
  }

  let starBreakdown = starCounter(productMetaData.ratings);

  return (
    <>
      <RatingBreakdownContainer onClick={() => {
              clickTracker('RatingReviews', 'RatingBreakdown');
              console.log('RatingReviews', 'RatingBreakdown');
            }}>
        <span className="rating">{averageNumber(productMetaData.ratings)}</span>
        <span>
          <Stars className="stars" />
        </span>
      </RatingBreakdownContainer>
      <TableContainer onClick={() => {
              clickTracker('RatingReviews', 'RatingBreakdown');
              console.log('RatingReviews', 'RatingBreakdown');
            }}>
        {starBreakdown.map((star, index) => {
          const starRating = 5 - index;
          return (
            <StarContainer
              key={starRating}
              onClick={() => {
                setFilters(() => {
                  let currentFilters = filters.slice();

                  let index = currentFilters.indexOf(starRating);
                  if (index !== -1) {
                    currentFilters.splice(index, 1);
                  } else {
                    currentFilters.push(starRating);
                  }
                  return currentFilters;
                });
              }}
            >
              <StarLeft>
                <div>{starRating} Stars</div>
              </StarLeft>
              <StarMiddle>
                <StarBar>
                  <StarFill fill={star[0]}></StarFill>
                </StarBar>
              </StarMiddle>
              <StarRight>{star[1]}</StarRight>
            </StarContainer>
          );
        })}
        <div>{percentMessage}</div>
        <div>{clearFilters}</div>
      </TableContainer>
    </>
  );
}
