import { ADD_ITEM_TO_CART_SUCCESS, REMOVE_ITEM_FROM_CART } from './types';

export const addItemToCart = (item) => (dispatch, getState) => {
  dispatch({
    type: ADD_ITEM_TO_CART_SUCCESS,
    payload: {
      product_id: item.product_id,
      product_name: item.product_name,
      product_category: item.product_category,
      product_image: item.product_image,
      selected_size: item.selected_size,
      selected_qty: item.selected_qty,
      style_id: item.style_id,
      style_name: item.style_name,
      product_price: item.product_price,
      total_price: item.total_price,
      favorite: item.favorite
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeItemFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: id
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
