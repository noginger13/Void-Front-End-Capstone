import {
  GET_PRODUCT_DETAIL_REQUEST,
  GET_PRODUCT_DETAIL_SUCCESS,
  GET_PRODUCT_DETAIL_FAIL
} from '../actions/types';

export default function productDetailReducer(state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT_DETAIL_REQUEST:
      return { loading: true };
    case GET_PRODUCT_DETAIL_SUCCESS:
      return { loading: false, productDetail: action.payload };
    case GET_PRODUCT_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
