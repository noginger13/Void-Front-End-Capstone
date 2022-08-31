import React from 'react';

//Components
import ReviewTop from './ReviewTop';
import ReviewSummary from './ReviewSummary';
import ReviewBody from './ReviewBody';
import ReviewGallery from './ReviewGallery';
import ReviewRec from './ReviewRec';
import ReviewHelpful from './ReviewHelpful';

//Styles
import { ReviewsData, ReviewCheck } from '../styles/ReviewTiles.styled';

export default function ReviewTile({ review }) {
  let response;
  if (review.response !== null) {
    response = <div className="response">{`Response from seller: ${review.response}`}</div>
  }

  return (
    <div className="tile">
      <ReviewTop
        rating={review.rating}
        id={review.review_id}
        name={review.reviewer_name}
        date={review.date}
      />
      <ReviewSummary summary={review.summary}/>
      <ReviewBody body={review.body} />
      {response}
      <ReviewGallery photos={review.photos} />
      <ReviewCheck>
        <ReviewRec rec={review.recommend} />
      </ReviewCheck>
      <br></br>
      <ReviewHelpful id={review.review_id} helpfulness={review.helpfulness} />
      <br></br>
    </div>
  );
}
