import {
  GET_PRODUCT_QUESTION_REQUEST,
  GET_PRODUCT_QUESTION_SUCCESS,
  GET_PRODUCT_QUESTION_FAIL
} from '../actions/types';

export default function productQuestionReducer (state = {}, action) {
  switch (action.type) {
    case GET_PRODUCT_QUESTION_REQUEST:
      return { loading: true };
    case GET_PRODUCT_QUESTION_SUCCESS:
      return { loading: false, productQuestions: action.payload };
    case GET_PRODUCT_QUESTION_FAIL:
      return {loading: false, error: action.payload.results }
    default:
      return state;
  }
}

