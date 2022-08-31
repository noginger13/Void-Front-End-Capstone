import {
  GET_PRODUCT_REVIEWS_REQUEST,
  GET_PRODUCT_REVIEWS_SUCCESS,
  GET_PRODUCT_REVIEWS_FAIL,
  SORT_PRODUCT_REVIEWS_REQUEST,
  SORT_PRODUCT_REVIEWS_SUCCESS,
  SORT_PRODUCT_REVIEWS_FAIL
} from '../actions/types';

export default function productReviewsReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT_REVIEWS_REQUEST:
      return { loading: true };
    case GET_PRODUCT_REVIEWS_SUCCESS:
      return { loading: false, productReviews: action.payload };
    case GET_PRODUCT_REVIEWS_FAIL:
      return { loading: false, error: action.payload };
    case SORT_PRODUCT_REVIEWS_REQUEST:
      return state;
    case SORT_PRODUCT_REVIEWS_SUCCESS:
      return { loading: false, productReviews: action.payload };
    case SORT_PRODUCT_REVIEWS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
