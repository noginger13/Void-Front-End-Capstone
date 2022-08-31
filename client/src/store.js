import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

const cartItems = JSON.parse(localStorage.getItem('cartItems'));
const outfitsPersist = JSON.parse(localStorage.getItem('outfitsPersist'))
const initialState = {
  cart: {
    cartItems: cartItems ? cartItems : []
  },
  outfits: outfitsPersist ? outfitsPersist : []
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
