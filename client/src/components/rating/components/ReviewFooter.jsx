import React from 'react';
import { useSelector } from 'react-redux';

//Styles
import { ReviewButton } from '../styles/ReviewButton.styled';

export default function ReviewFooter({
  reviewArray,
  showForm,
  setShowForm,
  viewable,
  setViewable
}) {
  const { productReviews } = useSelector((state) => state.productReviews);
  const { productMetaData } = useSelector((state) => state.productMetaData);

  let button;
  if (reviewArray.length > viewable) {
    button = (
      <ReviewButton
        onClick={() => {
          setViewable(() => {
            return viewable + 2;
          });
        }}
      >
        More Reviews
      </ReviewButton>
    );
  }

  return (
    <>
      {button}
      <ReviewButton
        onClick={() => {
          setShowForm(true);
        }}
      >
        Add a Review +
      </ReviewButton>
    </>
  );
}
