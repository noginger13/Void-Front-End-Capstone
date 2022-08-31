import axios from 'axios';
import {
  GET_RELATED_STYLE_REQUEST,
  GET_RELATED_STYLE_SUCCESS,
  GET_RELATED_STYLE_FAIL
} from './types';

const getRelatedStyle = (relatedIds) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATED_STYLE_REQUEST
    });
    const config = {
      headers: {
        Authorization: process.env.API_KEY
      }
    };
    const relatedStylesStore = [];
    for (const item of relatedIds) {
      const { data } = await axios.get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${item}/styles`,
        config
      );
      relatedStylesStore.push(data);
    }
    dispatch({
      type: GET_RELATED_STYLE_SUCCESS,
      payload: relatedStylesStore
    });
  } catch (error) {
    dispatch({
      type: GET_RELATED_STYLE_FAIL,
      payload: error
    });
  }
};

export default getRelatedStyle;
