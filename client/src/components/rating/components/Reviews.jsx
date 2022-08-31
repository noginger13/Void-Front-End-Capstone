import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

//Components
import ReviewTile from './ReviewTile';

//Styles
import { ReviewTileContainer } from '../styles/FlexContainers.styled';

export default function Reviews({ reviewArray, viewable }) {
  let filterdReviews = reviewArray.slice().splice(0, viewable);

  return (
    <ReviewTileContainer>
      {filterdReviews.map((review) => {
        return <ReviewTile key={review.review_id} review={review} />;
      })}
    </ReviewTileContainer>
  );
}
