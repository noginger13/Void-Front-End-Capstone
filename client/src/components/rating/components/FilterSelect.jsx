import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

//Actions
import { sortProductReviews } from '../../../actions/productReviewsAction';

//Styles
import { StyledSelect } from '../styles/FilterSelect.styled';

export default function FilterSelect({ sort, setSort }) {
  const { productReviews } = useSelector((state) => state.productReviews);
  const dispatch = useDispatch();

  const handleSelect = (e) => {
    let id = productReviews.product;
    dispatch(sortProductReviews(id, e.target.value));
  };

  return (
    <StyledSelect onChange={handleSelect} name="filter" id="review-filter">
      <option value="relevant"> relevance</option>
      <option value="newest"> date</option>
      <option value="helpful"> helpfulness</option>
    </StyledSelect>
  );
}
