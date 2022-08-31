import axios from 'axios';
import {
  GET_RELATED_DETAILS_SUCCESS,
  GET_RELATED_DETAILS_FAIL,
  GET_RELATED_DETAILS_REQUEST
} from './types';

const getRelatedDetails = (relatedIds) => async (dispatch) => {
  try {
    dispatch({
      type: GET_RELATED_DETAILS_REQUEST
    });
    const relatedStore = [];
    const config = {
      headers: {
        Authorization: process.env.API_KEY
      }
    };
    for (const item of relatedIds) {
      const { data } = await axios.get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${item}`,
        config
      );
      relatedStore.push(data);
    }

    dispatch({
      type: GET_RELATED_DETAILS_SUCCESS,
      payload: relatedStore
    });
  } catch (error) {
    dispatch({
      type: GET_RELATED_DETAILS_FAIL,
      payload: error
    });
  }
};
export default getRelatedDetails;
