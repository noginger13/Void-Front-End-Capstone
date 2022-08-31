import {
  GET_RELATED_PRODUCTS_REQUEST,
  GET_RELATED_PRODUCTS_SUCCESS,
  GET_RELATED_PRODUCTS_FAIL
} from '../actions/types';

// eslint-disable-next-line default-param-last
export default function relatedProductsReducer(state = {}, action) {
  switch (action.type) {
    case  GET_RELATED_PRODUCTS_REQUEST:
      return { loading: true };
    case  GET_RELATED_PRODUCTS_SUCCESS:
      return { loading: false, relatedProducts: action.payload };
    case  GET_RELATED_PRODUCTS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
