import axios from 'axios';
import {
  GET_PRODUCT_QUESTION_REQUEST,
  GET_PRODUCT_QUESTION_SUCCESS,
  GET_PRODUCT_QUESTION_FAIL
} from './types';

const getProductQuestion = (id) => async (dispatch) => {
  try {
    dispatch({
      type:GET_PRODUCT_QUESTION_REQUEST
    });
    const config = {
      headers: {
        Authorization : process.env.API_KEY
      }
    };
    const { data } = await axios.get (
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions?product_id=${id}&count=1000`,
      config
    );
    dispatch({
      type: GET_PRODUCT_QUESTION_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_QUESTION_FAIL,
      payload: error
    });
  }
};

export default getProductQuestion;