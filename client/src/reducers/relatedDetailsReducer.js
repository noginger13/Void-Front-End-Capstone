//import action types
import {
  GET_RELATED_DETAILS_REQUEST,
  GET_RELATED_DETAILS_SUCCESS,
  GET_RELATED_DETAILS_FAIL
} from '../actions/types';
export default function relatedDetailsReducer(state = {}, action) {
  switch (action.type) {
    case GET_RELATED_DETAILS_REQUEST:
      return { loading: true };
    case GET_RELATED_DETAILS_SUCCESS:
      return { loading: false, relatedDetails: action.payload };
    case GET_RELATED_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
