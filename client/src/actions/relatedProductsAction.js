import axios from 'axios';
import {
  GET_RELATED_PRODUCTS_REQUEST,
  GET_RELATED_PRODUCTS_SUCCESS,
  GET_RELATED_PRODUCTS_FAIL
} from './types';

const getRelatedProducts = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATED_PRODUCTS_REQUEST
    });
    const config = {
      headers: {
        Authorization: process.env.API_KEY
      }
    };
    const { data } = await axios.get(
      `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}/related`,
      config
    );
    dispatch({
      type: GET_RELATED_PRODUCTS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_RELATED_PRODUCTS_FAIL,
      payload: error
    });
  }
};

export default getRelatedProducts;