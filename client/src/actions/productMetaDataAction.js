import {
  GET_PRODUCT_REVIEW_METADATA_REQUEST,
  GET_PRODUCT_REVIEW_METADATA_SUCCESS,
  GET_PRODUCT_REVIEW_METADATA_FAIL
} from './types';
import axios from 'axios';

const getProductMetaData = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_PRODUCT_REVIEW_METADATA_REQUEST
    });
    const config = {
      headers: {
        Authorization: process.env.API_KEY
      }
    };
    const { data } = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${id}`,
      config
    );
    dispatch({
      type: GET_PRODUCT_REVIEW_METADATA_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_REVIEW_METADATA_FAIL,
      payload: error
    });
  }
};

export default getProductMetaData;
