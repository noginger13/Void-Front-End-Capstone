import {
  GET_PRODUCT_REVIEW_METADATA_REQUEST,
  GET_PRODUCT_REVIEW_METADATA_SUCCESS,
  GET_PRODUCT_REVIEW_METADATA_FAIL
} from '../actions/types';

export default function productReviewMetaDataReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT_REVIEW_METADATA_REQUEST:
      return { loading: true };
    case GET_PRODUCT_REVIEW_METADATA_SUCCESS:
      return { loading: false, productMetaData: action.payload };
    case GET_PRODUCT_REVIEW_METADATA_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
